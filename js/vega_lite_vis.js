var timeline = "visualisations/01_timeline.vg.json";

vegaEmbed("#timeline", timeline, {
    actions: false
}).catch(console.error);

var creatorLollipop =
    "visualisations/02_creator_lollipop.vg.json";

vegaEmbed("#creator-lollipop", creatorLollipop, {
    actions: false
}).catch(console.error);
