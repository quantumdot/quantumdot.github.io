import fs from 'fs';
import YAML from 'yaml';

export interface Honor {
    title: string;
    institution: string;
    time: string;
}

declare const data: Honor[]
export { data }

export default {
    watch: ['./data/honors.yml'],
    load(watchedFiles): Honor[] {
        // watchedFiles will be an array of absolute paths of the matched files.
        // generate an array of blog post metadata that can be used to render
        // a list in the theme layout
        const honors: Honor[] = [];

        watchedFiles.forEach((file) => {
            const data = YAML.parse(fs.readFileSync(file, 'utf-8'));
            honors.push(...data);
        });
        return honors;
    }
}
