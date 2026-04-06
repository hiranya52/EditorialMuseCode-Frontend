import { Component } from '@angular/core';
import { Article } from '../../../model/Article.model';
import { ArticleCard } from '../article-card/article-card';

@Component({
  selector: 'app-feed',
  imports: [ArticleCard],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {
  articles: Article[] = [
    {
      authorName: 'Julian Thorne',
      authorImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCRDolysTTOptensxc3s4IJxx90F51X1xyecywsH0rYNYUjUtMMdvKnVzHdqRNygjcMUvuZxZSVPoVdE7Gc08GQPzFKSUp0dYLNcVbUmO2enMhzP_qT1julVMLgC3FiN8-IhkFWpexmtYKcEnspW_7WX6LaWUGjORDn_oOrT5RCvoiSsnO04cMlCECn_zR6T_GKGe8Boo-1kfAnKJ8DiWNalD8JXRJos8ICzIsVDn5rr2mqWHc0PSUfhfqrM94ZF-ACSdulSY-JuAs',
      date: 'Oct 12, 2023',
      title: 'The Architecture of Silence: Why Modern Design Needs Breathing Room',
      description: `In an era of constant digital stimulation, the most luxury asset in design isn't a feature, it's the space between...`,
      category: 'Architecture',
      readTime: '8 min read',
      articleImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCSllPIzUiafhH0tiDz5sc0-9LJv5JETglwc9Nvm0dQO8OyHyNKJDxQzXtN6bm56YKXjJ5cyyUBEvA9s9DiYEO-S2RoaNd__w_ACnzyu27KNPsCMe9Y5rNVHFxXgziHuzy_XKuMtf7bGSx_3qsYUlSHJgds3aqyb5g4wb-9WnArgABDDUylDoV8J7ZbYM-z_gl2ZyM9fhZnunc3BHEmFVfEVFJ-kzjk6OWKHlw6n5rRpkkEmZHtU5pH9MCyz7fVCOF3xFbjhgIMVG0',
    },
    {
      authorName: 'Elena Vance',
      authorImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAjKJIctWID_2-_xb1o9Z_Q6Hy-9VCejYws4JbAbqfoFmfdGrYfA5ffOy9INF1jTVN9_N7uFLLgj_Ez3a1PXGF0dkXUi0OjrVPDDCXp6GKR4NVWoAHUdUcNHtTBzVunkzjEZFjfiEAgTuqh_XQJmkkzdjTZfZaOWflNT02ueCmM46aZJRoY2YleYsrbntP_XktCo6n_l3JuFRnJo2-5_gzc2nOdo3uDBHE436mzJA8AGMzniXTz_wtBpJa64yiSrmhP9dYDsPEMsQQ',
      date: 'Oct 10, 2023',
      title: 'Digital Antiquity: Bridging the Gap Between Tangible and Virtual Worlds',
      description: `As we spend more of our lives in meta-verses, the craving for the tactile increases...`,
      category: 'Technology',
      readTime: '12 min read',
      articleImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBSUUOXp9eSaV0ce042qhAkl4B6359DcfXdJGPeb1iPNDtJIed8N2zw7cySJKn5lP9NTY2NjkczwJB19DubRRyIyThUoiwl4LibO1P2bvGPIxCBxhu_5xNHB6z5RRlizjcN4LynX_DOJb3TYjCrDXLFNdj8oOa2vOXLGq6hrB-pfteofTopOQo1U2Nu19TMAMiVKdRDAJsFKWOOX8XWacC6dtEZeD2N-v76DmfD3-vmLikVL1wX861PGVK7nU-j7tzT28sKHyStC0I',
    },
    {
      authorName: 'Markus Aurelio',
      authorImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUTOmxvrQM4vavhuMROO1T6KDoqE6AU1RgDCBmC_fBGMSvwMyPPHO-KKp2mxy5wJftxRSsIaWd8kyuPOXi-OMn8Aor38PJPSKpsBGlw5dCtFWHAXWLaqaJNPcq5evQ058VX0IDd_3bu2VTvd6dcuVUIO3OrersHYr4GqVHb5BwNQwn9K0sQ7_CY-RD8lxy307R1jQ457XaHsyGtQ4AZo1yvdszLxqJTWS93Max-nQs4wjU5MR5YiVUn3RfJobykH9dtThJ04scrLk',
      date: 'Oct 8, 2023',
      title: 'The Stoic Writer: Finding Flow in Chaos',
      description: `Writing is an act of defiance against entropy...`,
      category: 'Philosophy',
      readTime: '6 min read',
      articleImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBpQzzbJn7buwU3TprGwOoGlJr7EaNE3hCn_w_oJsO5_ldNuDGMoWH3ypZjpfpZR7pKDQwMYA0MbI6shoac8vnbl-dpisbOzKrKrJwItfOIlTqjMPxoV1OjvRuGIOTvWXMW_UJeEGYlNOlje4nW3GdxHNglTwns5U0CnOR2scASipQ6KzmJ9IWQjXAmT6y8N-bEmGKrfrVR1Sqo8TA5CeBmG6WN21meLhBvqqx_DAbq2VxWpYb-L7Bb5saXLHdEro3antdbUf0RQZc',
    },
  ];
}
