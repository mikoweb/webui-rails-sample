import Mn from 'marionette';
import $ from 'jquery';
import SampleView from 'app/view/sample';
import SampleModel from 'app/model/sample';

export default class SamplePage extends Mn.Application {
    initialize() {
        this.sampleView = new SampleView({
            el: $('#sample'),
            model: new SampleModel({id: 1}),
        }).render();
    }
}
