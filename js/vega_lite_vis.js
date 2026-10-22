

// Store views for charts using music themes.
var themeViews = {};

// Empty array means all themes are visible.
var selectedThemes = [];


function embedChart(elementId, filePath, themeChartName) {

    return vegaEmbed(elementId, filePath, {
        actions: false
    })
    .then(function(result) {

        // Register charts supporting multi-select.
        if (themeChartName) {

            themeViews[themeChartName] = result.view;

            // Apply selections made before loading.
            return result.view
                .signal("selectedThemes", selectedThemes.slice())
                .runAsync();

        }

    })
    .catch(function(error) {
        console.error(
            "Error loading chart:",
            elementId,
            error
        );
    });

}


// Chart 01: Music timeline
var timeline =
    "visualisations/01_timeline.vg.json";

embedChart(
    "#timeline",
    timeline,
    "timeline"
);


// Chart 02: Top creators
var creatorLollipop =
    "visualisations/02_creator_lollipop.vg.json";

embedChart(
    "#creator-lollipop",
    creatorLollipop
);


// Chart 03: Creator-theme Sankey
var creatorThemeSankey =
    "visualisations/03_creator_theme_sankey.vg.json";

embedChart(
    "#creator-theme",
    creatorThemeSankey
);


// Chart 04: Theme heatmap
var themeHeatmap =
    "visualisations/04_theme_heatmap.vg.json";

embedChart(
    "#theme-heatmap",
    themeHeatmap
);


// Chart 05: Subject treemap
var subjectTreemap =
    "visualisations/05_subject_treemap.vg.json";

embedChart(
    "#subject-composition",
    subjectTreemap
);


// Chart 06: Theme distribution
var periodTheme =
    "visualisations/06_period_theme.vg.json";

embedChart(
    "#period-theme",
    periodTheme
);


// Chart 07: Venue dot map

var venueDotMap = "visualisations/07_venue_dot_map.vg.json";

vegaEmbed("#venue-dot-map", venueDotMap, {
    actions: false,
    renderer: "canvas"
})
.then(function(result) {
    var venueMapView = result.view;
    var venueSelect = document.getElementById("venue-type-select");

    if (!venueSelect) {
        console.error("Venue dropdown not found.");
        return;
    }

    venueSelect.value = "Bar";

    venueSelect.addEventListener("change", function() {
        venueMapView
            .signal("venueTypeFilter", venueSelect.value)
            .runAsync()
            .catch(console.error);
    });
})
.catch(console.error);




// Chart 08: Venue types
var venueTypes =
    "visualisations/08_venue_types.vg.json";

embedChart(
    "#venue-types",
    venueTypes
);


// Chart 09: Venue concentration
var venueConcentration =
    "visualisations/09_venue_concentration.vg.json";

embedChart(
    "#venue-concentration",
    venueConcentration
);

// Chart 10: State attendance map
var attendanceMap =
    "visualisations/10_attendance_map.vg.json";

embedChart(
    "#attendance-map",
    attendanceMap
);


// Chart 11: Age and gender
var ageGender =
    "visualisations/11_age_gender.vg.json";

embedChart(
    "#age-gender",
    ageGender
);


// Chart 12: Attendance by age
var ageAttendance =
    "visualisations/12_age_attendance.vg.json";

embedChart(
    "#age-attendance",
    ageAttendance
);

// Chart 13: Attendance frequency waffle
var frequencyWaffle =
    "visualisations/13_frequency_waffle.vg.json";

embedChart(
    "#frequency-waffle",
    frequencyWaffle
);

var themeButtons = document.querySelectorAll(
    ".theme-key-items button"
);


// Apply selected themes to registered charts.
function updateThemeCharts() {

    Object.keys(themeViews).forEach(function(chartName) {

        var view = themeViews[chartName];

        view.signal(
            "selectedThemes",
            selectedThemes.slice()
        )
        .runAsync()
        .catch(function(error) {
            console.error(
                "Theme filter error:",
                chartName,
                error
            );
        });

    });

}


// Update the appearance of selected buttons.
function updateThemeButtons() {

    themeButtons.forEach(function(button) {

        var isActive = selectedThemes.includes(
            button.dataset.theme
        );

        button.classList.toggle(
            "active",
            isActive
        );

        button.setAttribute(
            "aria-pressed",
            String(isActive)
        );

    });

}


// Handle multiple theme selections.
themeButtons.forEach(function(button) {

    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", function() {

        var clickedTheme = button.dataset.theme;

        if (selectedThemes.includes(clickedTheme)) {

            // Deselect an existing theme.
            selectedThemes = selectedThemes.filter(
                function(theme) {
                    return theme !== clickedTheme;
                }
            );

        } else {

            // Add another theme to the selection.
            selectedThemes.push(clickedTheme);

        }

        updateThemeButtons();
        updateThemeCharts();

    });

});
