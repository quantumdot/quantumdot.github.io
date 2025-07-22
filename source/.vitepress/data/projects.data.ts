import fs from 'fs';
import YAML from 'yaml';

export interface Project {
    title: string;
    url: string;
    image: string;
    details: string;
    technologies: string;
}

declare const data: Project[]
export { data }

export default {
    watch: ['./data/projects.yml'],
    load(watchedFiles): Project[] {
        // watchedFiles will be an array of absolute paths of the matched files.
        // generate an array of blog post metadata that can be used to render
        // a list in the theme layout
        const projects: Project[] = [];

        watchedFiles.forEach((file) => {
            const data = YAML.parse(fs.readFileSync(file, 'utf-8'));
            projects.push(...data);
        });
        return projects;
    }
}
