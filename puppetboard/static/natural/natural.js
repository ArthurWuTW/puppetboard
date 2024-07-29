/**
* Created by Shodhan Save on Jan 23, 2018.
* Updated @ Jan 25, 2018
* Modified for the Puppetboard by Greg Dubicki.
*/

/**
* This plug-in allows sorting of human-readable time delta, viz.,
* "1 week", "2 weeks 3 days", "4 weeks 5 days 6 hours", "1:24 hours" etc.
*
* Currently this plugin supports time range from microseconds to decades.
*
* The plugin also takes care of singular and plural values like week(s)
*
*/

jQuery.extend(jQuery.fn.dataTableExt.oSort,{

    "natural-asc" : function (a, b) {
        return a.localeCompare(b, navigator.languages[0] || navigator.language, {
            numeric: true,
            ignorePunctuation: true,
        });
    },

    "natural-desc" : function (a, b) {
        return (a.localeCompare(b, navigator.languages[0] || navigator.language, { numeric: true, ignorePunctuation: true }) *
                -1);
    }
});
