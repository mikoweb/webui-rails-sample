import Backbone from 'backbone';
import moment from 'moment';

export default class SampleModel extends Backbone.Model {
    urlRoot = '/sample';
    defaults() {
        return {
            progress: 0
        };
    }
    getDate() {
        return moment(this.get('date')).format('YYYY-MM-DD HH:mm:ss');
    }
}
