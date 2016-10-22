import Mn from 'marionette';
import $ from 'jquery';

// http://marionettejs.com/docs/master/marionette.view.html
// http://backbonejs.org/#Model

export default class SampleView extends Mn.View {
    template = '#tplSample';
    ui() {
        return {
            button: '.sample__button'
        };
    };
    events() {
        return {
            'click @ui.button': '_onClickButton'
        };
    };
    modelEvents() {
        return {
            'change': 'render'
        };
    };
    initialize(options) {
        // initialize view
    }
    templateContext() {
        return {
            date: this.model.getDate()
        };
    }
    onRender() {
        // do something on view render
    }
    /**
     * @param {Event} e
     * @private
     */
    _onClickButton(e) {
        const btn = $(e.target);
        btn.attr('disabled', 'disabled');
        this.model.fetch({
            success: function () {
                btn.removeAttr('disabled');
            },
            error: function () {
                btn.removeAttr('disabled');
            }
        });
    }
}
