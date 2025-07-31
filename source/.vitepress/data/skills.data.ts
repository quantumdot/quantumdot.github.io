import fs from 'fs';
import YAML from 'yaml';

export interface SkillGroup {
    title: string;
    skills: string[];
}


declare const data: SkillGroup[]
export { data }

export default {
    watch: ['./data/skills.yml'],
    load(watchedFiles): SkillGroup[] {
        // watchedFiles will be an array of absolute paths of the matched files.
        // generate an array of blog post metadata that can be used to render
        // a list in the theme layout
        const skillGroups: SkillGroup[] = [];

        watchedFiles.forEach((file) => {
            const data = YAML.parse(fs.readFileSync(file, 'utf-8'));
            skillGroups.push(...data);
        });
        return skillGroups;
    }
}
