$(window).on('scroll', function() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height() - $(window).height();
    var scrollRatio = docHeight > 0 ? scrollTop / docHeight : 0;

    var configs = [
        { selector: '.plane_body1 svg',   start: -106, end: -1106 },
        { selector: '.plane_body1_2 svg',   start: -106, end: -1106 },

        { selector: '.plane_body_top1 svg',   start: -106, end: -1106 },
        { selector: '.plane_body_top1_2 svg',   start: -106, end: -1106 },

        { selector: '.plane_wing1 svg',   start: -140, end: -1140 },
        { selector: '.plane_wing1_2 svg',   start: -142, end: -1142 },
        { selector: '.plane_wing1_3 svg',   start: -144, end: -1144 },
        { selector: '.plane_wing1_4 svg',   start: -146, end: -1146 },

        { selector: '.plane_wing2 svg',   start: -106, end: -1106 },
        { selector: '.plane_wing2_2 svg',   start: -106, end: -1106 },
        { selector: '.plane_wing2_3 svg',   start: -109, end: -1109 },

        { selector: '.plane_people svg',   start: -135, end: -1135 },

        { selector: '.plane_tail svg',   start: -106, end: -1106 },
        { selector: '.plane_fella svg',   start: -174, end: -1174 }
    ];

    configs.forEach(function(cfg) {
        var $svg = $(cfg.selector);
        if ($svg.length) {
            var offset = cfg.start + (cfg.end - cfg.start) * scrollRatio * 8.5;
            $svg.css('stroke-dashoffset', offset + 'px');
        }
    });
});
