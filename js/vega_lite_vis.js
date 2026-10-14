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

var subjectTreemap =
    "visualisations/05_subject_treemap.vg.json";

vegaEmbed("#subject-composition", subjectTreemap, {
    actions: false
}).catch(console.error);

var periodTheme =
    "visualisations/06_period_theme.vg.json";

vegaEmbed("#period-theme", periodTheme, {
    actions: false
}).catch(console.error);

var venueDotMap =
    "visualisations/07_venue_dot_map.vg.json";

vegaEmbed("#venue-dot-map", venueDotMap, {
    actions: false
}).catch(console.error);

var venueTypes = "visualisations/08_venue_types.vg.json";

vegaEmbed("#venue-types", venueTypes, {
  actions: false
}).catch(console.error);