import alt from '../alt';
import request from 'superagent';

class DataSetAction {

  constructor() {

  }

  createDataSet(){
      console.log('CALL ACTION FUNCTION');
      const response = request.get('/varOne-web/rest/history')
                                    .set('Accept', 'application/json');
       console.log(response);
  }

}

export default alt.createActions(DataSetAction);
