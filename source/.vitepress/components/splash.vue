<template>
    <div class="splash clearfix">
        <div class="headshot-container">
            <img :src="theme.logo" alt="{{ site.title }}" class="headshot">
            <div class="social-links">
                <template v-for="link in theme.socialLinks" :key="link.icon">
                    <a class="VPSocialLink no-icon" :href="link.link" :aria-label="link.ariaLabel" :title="link.ariaLabel" target="_blank" rel="noopener">
                        <span :class="`vpi-social-${link.icon} link-icon`" :style="`--icon: url('https://api.iconify.design/simple-icons/${link.icon}.svg');`"></span>
                        <span class="link-text">{{ stripLink(link.link) }}</span>
                    </a>
                </template>
            </div>
        </div>
        <div class="title-container">
            <h1 class="title">{{ site.title }}</h1>
            <p class="subtitle">{{ site.description }}</p>
        
            <div class="interests">
                <h3>Interests</h3>
                <ul>
                    <li>Genetics and Genomics</li>
                    <li>Neuroscience and Ethology</li>
                    <li>Bioinformatics and Machine Learning</li>
                    <li>Solving Problems and Building useful things</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="spacer" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'

const { site, theme } = useData()

function stripLink(link: string) {
    return link.replace('mailto:', '');
}
</script>


<style scoped>
.splash {
    display: flex;
    flex-wrap: wrap;
}
.spacer {
    margin-bottom:40px;
}
.title-container {
    width: 490px;
}
.title {
    margin-top: 15px;
    font-size: 32px;
    font-weight: bold;
}
.subtitle {
    padding: 10px 5px;
    color: var(--vp-c-brand-1);
    font-size: 12px;
    line-height: 18px;
    text-align: justify;;
}
.headshot-container {
    flex-shrink: 0;;
    margin-right: 20px;

}
img.headshot {
    width: 250px;
    height: 250px;
    border-radius: 50%;
}
.social-links {
    margin-top: 30px;
    text-align: center;
}
.social-links a {
    padding: 0 8px;
    line-height: 32px;
}
.social-links a::after{
    display: none;
}
.social-links .link-text {
    display: none;
    padding-left: 10px;
    vertical-align: middle;
}
.social-links .link-icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: middle;
}
h3 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 1px solid var(--vp-c-brand-1);
}
.interests {
    margin-top: 20px;
}
.interests ul {
    list-style-type: disc;
    padding-left: 15px;
    font-size: 12px;
}
@media (max-width: 600px) {
    .headshot-container {
        margin: 0 auto;
    }
    img.headshot {
        width: 150px;
        height: 150px;
        display: block;
        margin: 0 auto;
    }
    .title-container {
        margin: 0 auto;
        text-align: center;
    }
    .interests ul {
        list-style-type: none;
    }
    h3 {
        border:none;
        text-decoration: underline;
        text-decoration-color: var(--vp-c-brand-1);
    }
}
@media print {
    .headshot-container {
        margin: 0 auto;
        display: block;
        width: 100%;
    }
    img.headshot {
        display: block;
        margin: 0 auto;
    }
    .title-container {
        width: 100%;
    }
    .title {
        text-align: center;
    }
    .social-links .link-text {
        display: inline;
    }
    .social-links .link-icon {
        width: 24px;
        height: 24px;
    }
    .social-links a {
        display: block;
    }
}

</style>