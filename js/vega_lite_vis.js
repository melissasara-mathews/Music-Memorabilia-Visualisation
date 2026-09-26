var timeline = "visualisations/01_timeline.vg.json";

vegaEmbed("#timeline", timeline, {
    actions: false
}).catch(console.error);

var creatorLollipop =
    "visualisations/02_creator_lollipop.vg.json";

vegaEmbed("#creator-lollipop", creatorLollipop, {
    actions: false
}).catch(console.error);

var creatorThemeSankey =
    "visualisations/03_creator_theme_sankey.vg.json";

vegaEmbed("#creator-theme", creatorThemeSankey, {
    actions: false
}).catch(console.error);

var themeHeatmap =
    "visualisations/04_theme_heatmap.vg.json";

vegaEmbed("#theme-heatmap", themeHeatmap, {
    actions: false
}).catch(console.error);
