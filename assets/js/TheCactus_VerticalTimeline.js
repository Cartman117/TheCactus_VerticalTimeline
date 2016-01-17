(function ($) {
    "use strict";

    $.fn.TheCactus_VerticalTimeline = function (options) {
        var settings                = $.extend({}, $.fn.TheCactus_VerticalTimeline.defaults, options),
            actual_tc_vt            = this,
            tc_vt_item_count        = $(".tc_vt_item", this).length,
            tc_verticaltimeline     = $("<div>", {"class": "tc_vt_timeline"}),
            tc_vt_bar               = $("<div>", {"class": "tc_vt_bar"}),
            tc_vt_events            = $("<div>", {"class": "tc_vt_events"}),
            tc_vt_i_place           = 0,
            tc_vt_i_hint,
            tc_vt_i_hint_content,
            tc_vt_i_type,
            tc_vt_i_position,
            tc_vt_event,
            tc_vt_e_point,
            tc_vt_e_hint,
            tc_vt_e_position,
            tc_vt_arrows,
            tc_vt_a_toparrow,
            tc_vt_a_bottomarrow,
            tc_vt_temp_width,
            tc_vt_points_width,
            tc_vt_p_w_left;

        tc_verticaltimeline.append(tc_vt_bar);
        $(".tc_vt_item", this).each(function (index) {
            tc_vt_event             = $("<div>", {"class": "tc_vt_event"});
            tc_vt_i_hint            = $(".tc_vt_i_hint", this).html();
            tc_vt_i_position        = $(".tc_vt_i_position", this);
            tc_vt_i_type            = $(".tc_vt_i_type", this);
            tc_vt_e_position        = $("<div>", {"class": "tc_vt_e_position"});
            tc_vt_e_point           = $("<div>", {"class": "tc_vt_e_point tc_vt_e_p" + index});
            tc_vt_e_hint            = $("<div>", {"class": "tc_vt_e_hint tc_vt_e_h" + index});
            tc_vt_i_hint_content    = $("<div>", {"class": "tc_vt_e_hint_content"});
            tc_vt_e_point.css({"margin-left": "-" + (settings.pointsWidth / 2) + "px"});
            tc_vt_i_hint_content.append(tc_vt_i_hint);
            tc_vt_e_hint.append(tc_vt_i_hint_content);
            tc_vt_e_point.append(tc_vt_i_type);
            tc_vt_e_position.append(tc_vt_i_position.html());
            if (tc_vt_i_place === 1) {
                tc_vt_event.append(tc_vt_e_position);
                tc_vt_event.append(tc_vt_e_point);
                tc_vt_event.append(tc_vt_e_hint);
                tc_vt_e_position.addClass("tc_vt_e_position_left");
                tc_vt_e_hint.addClass("tc_vt_e_hint_right");
                tc_vt_i_place = 0;
            } else {
                tc_vt_event.append(tc_vt_e_position);
                tc_vt_event.append(tc_vt_e_point);
                tc_vt_event.append(tc_vt_e_hint);
                tc_vt_e_position.addClass("tc_vt_e_position_right");
                tc_vt_e_hint.addClass("tc_vt_e_hint_left");
                tc_vt_i_place = 1;
            }
            tc_vt_events.append(tc_vt_event);
            
            tc_vt_event = tc_vt_e_hint = tc_vt_e_point = tc_vt_e_position = null;
        });
        tc_verticaltimeline.append(tc_vt_events);
        this.empty();
        this.append(tc_verticaltimeline);

        if (settings.displayArrows) {
            tc_vt_arrows            = $("<div>", {"class": "tc_vt_arrows"});
            tc_vt_a_toparrow        = $("<div>", {"class": "tc_vt_toparrow"});
            tc_vt_a_bottomarrow     = $("<div>", {"class": "tc_vt_bottomarrow"});
            tc_vt_arrows.append(tc_vt_a_toparrow);
            tc_vt_arrows.append(tc_vt_a_bottomarrow);
            this.append(tc_vt_arrows);
        }

        return this;
    };

    $.fn.TheCactus_VerticalTimeline.defaults = {
        displayArrows: 1,           //0, 1 : hide, show
        pointsWidth: 50,            //in pixels including margin, border...
        startSide: 0                //0, 1 : left, right
    };
}(jQuery));