import fs from 'fs';
import YAML from 'yaml';
import axios from 'axios';

export interface Publication {
    title: string;
    authors: string;
    journal: string;
    date: string;
    doi: string;
    notes?: string;
    related?: Publication[];
}
export interface PublicationsData {
    highlight: string[]
    in_progress: Publication[];
    published: Publication[];
    stats: PublicationsStats;
}
export interface PublicationsStats {
    document_count: number;
    cited_by_count: number;
    citation_count: number;
    h_index: number;
    coauthor_count: number;
}

declare const data: PublicationsData
export { data }



export default {
    watch: ['./data/publications.yml'],
    async load(watchedFiles): Promise<PublicationsData> {
        // watchedFiles will be an array of absolute paths of the matched files.
        // generate an array of blog post metadata that can be used to render
        // a list in the theme layout
        const publications: PublicationsData = {
            highlight: [],
            in_progress: [],
            published: [],
            stats: {
                document_count: 0,
                cited_by_count: 0,
                citation_count: 0,
                h_index: 0,
                coauthor_count: 0
            }
        };
        watchedFiles.forEach((file) => {
            const data = YAML.parse(fs.readFileSync(file, 'utf-8'));
            if (data.highlight) {
                publications.highlight.push(...data.highlight);
            }
            if (data.in_progress) {
                publications.in_progress.push(...data.in_progress);
            }
            if (data.published) {
                publications.published.push(...data.published);
            }
        });


        const params = {
            apiKey: process.env.VITE_ELSEVIER_API_TOKEN,
            view: 'metrics',
        }
        await axios.get(`https://api.elsevier.com/content/author/author_id/${process.env.VITE_ELSEVIER_AUTHOR_ID}`, { params })
            .then(response => {
                const the_stats = response.data["author-retrieval-response"][0];
                publications.stats.document_count = the_stats.coredata["document-count"];
                publications.stats.cited_by_count = the_stats.coredata["cited-by-count"];
                publications.stats.citation_count = the_stats.coredata["citation-count"];
                publications.stats.h_index = the_stats["h-index"];
                publications.stats.coauthor_count = the_stats["coauthor-count"];
            })
            .catch(error => {
                console.error('Error fetching Elsevier data:', /*error*/);
            });
        return publications;
    }
};

