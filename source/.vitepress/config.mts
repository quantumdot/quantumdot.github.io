import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Joshua K. Thackray",
    description: `
My research spans genetics, neuroscience, and molecular biology, with a primary focus on developing 
machine learning and computer vision approaches to understand pain, injury, and recovery in rodent models.
I've made significant contributions to Tourette Syndrome research by creating the first mouse models with construct
validity based on human patient mutations and using computational methods to identify behavioral and dopamine-signaling phenotypes. 
Additionally, my work has advanced our understanding of Sirtuin biology, particularly its roles in DNA repair, 
transposable element regulation, and X-chromosome inactivation. Despite my computational expertise, I have a strong foundation in 
conducting wet-lab experiments to validate my findings and ensure their biological relevance.`,

    themeConfig: {
        logo: "/images/headshot.jpg",
        // https://vitepress.dev/reference/default-theme-config

        sidebar: [
            { text: "Education", link: "#education" },
            { text: "Experience", link: "#experience" },
            { text: "Projects", link: "#projects" },
            { text: "Publications", link: "#publications" },
            { text: "Honors", link: "#honors" },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/quantumdot', ariaLabel: "Github Profile" },
            { icon: 'googlescholar', link: 'https://scholar.google.com/citations?hl=en&user=iatgUFoAAAAJ', ariaLabel: "Google Scholar Profile" },
            { icon: 'orcid', link: 'https://orcid.org/0000-0003-2828-452X', ariaLabel: "ORCID Profile" },
            //{ icon: 'linkedin', link: 'https://www.linkedin.com/in/', ariaLabel: "Linked In Profile" },
            { icon: 'gmail', link: 'mailto:jkthackray@gmail.com', ariaLabel: "Email Me" },
        ],
        
    },
    markdown: {
        externalLinks: {
            target: '_blank',
            rel: 'noopener noreferrer' // Recommended for security
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/images/favicon/favicon.ico' }],  // favicon
        ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-7DEQZY5K6S', async: 'true' }],  // google analytics
        ['script', {}, "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-7DEQZY5K6S');"]  // google analytics
    ],
})
