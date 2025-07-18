import fs from 'fs';
import YAML from 'yaml';

export interface Experience {
    role: string;
    time: string;
    company: string;
    details: string;
    technologies?: string;
}

declare const data: Experience[]
export { data }

export default {
    watch: ['./data/experience.yml'],
    load(watchedFiles): Experience[] {
        // watchedFiles will be an array of absolute paths of the matched files.
        // generate an array of blog post metadata that can be used to render
        // a list in the theme layout
        const experiences: Experience[] = [];

        watchedFiles.forEach((file) => {
            const data = YAML.parse(fs.readFileSync(file, 'utf-8'));
            experiences.push(...data);
        });
        return experiences;
    }
}
