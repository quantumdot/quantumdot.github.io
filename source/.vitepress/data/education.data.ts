import fs from 'fs';
import YAML from 'yaml';

export interface Education {
    institution: string;
    location: string;
    time: string;
    degrees: string[];
}

declare const data: Education[]
export { data }

export default {
    watch: ['./data/education.yml'],
    load(watchedFiles): Education[] {
        // watchedFiles will be an array of absolute paths of the matched files.
        // generate an array of blog post metadata that can be used to render
        // a list in the theme layout
        const educations: Education[] = [];

        watchedFiles.forEach((file) => {
            const data = YAML.parse(fs.readFileSync(file, 'utf-8'));
            educations.push(...data);
        });
        return educations;
    }
}
