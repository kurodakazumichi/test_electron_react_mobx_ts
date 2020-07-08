import React from 'react';
import ReactDOM from 'react-dom';
import { observable, computed, action } from 'mobx'
import { observer } from 'mobx-react';

class EnemyEntity {
  @observable private _id:number;
  @observable private _name:string;

  constructor() {
    this._id = 0;
    this._name = "";
  }

  @computed get id() {
    return this._id;
  }

  @computed get name() {
    return this._name;
  }

  @action setId(id:number) {
    this._id = id;
  }

  @action setName(name:string) {
    this._name = name;
  }
}

class EnemiesStore {
  @observable _datas:EnemyEntity[] = [];

  @action public insert(enemy:EnemyEntity) {
    this._datas.push(enemy);
  }

  @computed get datas() {
    return this._datas;
  }

}

const store = new EnemiesStore();

@observer
class App extends React.Component {
  constructor(props:any) {
    super(props);

    window.core.xxxx();

    const enemy = new EnemyEntity();
    enemy.setId(1);
    enemy.setName("しょぼーん");

    store.insert(enemy);
  }

  private onClickAddButton() {
    const enemy = new EnemyEntity();
    enemy.setId(1);
    enemy.setName("しょぼーん2");

    store.insert(enemy);
  }

  render() {
    return (
      <div className="app">
        Hello World

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            {store.datas.map((enemy, key) => {
              return (
                <tr key={key}>
                  <td>{enemy.id}</td>
                  <td><input defaultValue={enemy.name}/></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button onClick={this.onClickAddButton}>Add</button>
      </div>
    );
  }
}

const container = document.getElementById('contents');
ReactDOM.render(<App />, container);