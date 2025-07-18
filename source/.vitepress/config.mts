import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Joshua K. Thackray",
    description: "Personal Website",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        sidebar: [
            { text: "Education", link: "#education" },
            { text: "Experience", link: "#experience" },
            { text: "Honors", link: "#honors" },
            { text: "Publications", link: "#publications" },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/quantumdot' },
            { icon: 'googlescholar', link: 'https://scholar.google.com/citations?hl=en&user=iatgUFoAAAAJ' },
            { icon: 'orcid', link: 'https://orcid.org/0000-0003-2828-452X' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/' },
            { icon: 'gmail', link: 'mailto:jkthackray@gmail.com' },
        ]
    },
    markdown: {
        externalLinks: {
            target: '_blank',
            rel: 'noopener noreferrer' // Recommended for security
        }
    }
})
