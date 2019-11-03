import React from 'react';
import './App.css';
import Scheme from './components/Scheme';
import Matrix from './components/Matrix';
import Settings from './components/Settings';
import Avatar2 from './img/avatar2.png';
import Win from './img/winner.png';
import Avatar1 from './img/avatar1.png';
import SoundFailed from './sound/3.wav';
import SoundWonded from './sound/2.wav';
import SoundKilled from './sound/1.wav';

const message = {
	computer: 'Мой ход, подождите...',
	human: 'Жду вашего хода...',
	end: 'Просмотрите оставшиеся корабли',
}
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			human: {
				name: 'Супергерой',
				ships: [], // личные корбали
				fail_points: [], // промазанные точки
				help_points: [], // вспомогательные точки вокруг потопленных чужых кораблей
				wonded_ships: [],// раненные корабли(точки) у противника
				killed_ships: [], // потопленные корабли(точки) у противника
				last_point: {}, // последний ход
				score: 0,
			},
			computer: {
				name: 'Злодей',
				ships: [], // личные корбали
				fail_points: [], // промазанные точки
				help_points: [], // вспомогательные точки вокруг потопленных чужых кораблей
				wonded_ships: [], // раненные корабли(точки) у противника
				killed_ships: [], // потопленные корабли(точки) у противника
				last_point: {}, // последний ход
				score: 0,
				trash: [], // все старые ходы компьютера
				last_success: [], // последние успешные ходы(точки)
			},
			game_start: false, // если имена заданы, то игра считается начатой
			game_active: '', // кто ходит
			game_message: '', // сообщение подсказка, кто ходит
			game_winner: '',
			game_sound: true,
        }
	}

	componentDidMount(){
		// предварительно загружаем звуки
		this.soundFailed = new Audio(SoundFailed);
		this.soundWonded = new Audio(SoundWonded);
		this.soundKilled = new Audio(SoundKilled);

		this.generateShips();
	}
	// вспомогательная функция для обновления хранилища
	updateState = (data, player='human') =>{
		if(player == 'human'){
			this.setState({
				human: {
					...this.state.human,
					...data
				}
			})
		} else{
			this.setState({
				computer: {
					...this.state.computer,
					...data
				}
			})
		}
		//setTimeout(_ =>console.log(player,this.state[player]),2000)
		//setTimeout(_ =>console.log(player,this.state[player].ships),2000)
	}
	changeSound = () =>{
		if(this.state.game_sound) {
			this.setState({game_sound:false})
			this.soundFailed.volume = 0;
			this.soundWonded.volume = 0;
			this.soundKilled.volume = 0;
		}
		else {
			this.setState({game_sound:true})
			this.soundFailed.volume = 1.0;
			this.soundWonded.volume = 1.0;
			this.soundKilled.volume = 1.0;
		}
	}

    // Получение случайного целого числа в заданном интервале(включая A и B)
	randAB =(min,max) =>{
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
	}
	// генерирование местоположения кораблей с учетом правил игры
	generateShips = (player='human') =>{
		let ships = [];
		let newShip;
		Scheme.forEach(ship =>{
			do{
				newShip = this.getCoodinatesForShip(ship);
			} while(this.isOverlapShips(newShip,ships))
			ships.push(newShip);
		})
		this.updateState({ships},player);
	}

	// получение координат для стартовой точки(слева сверху) нового корабля
	getCoodinatesForShip = (ship) =>{
		//произвольно выбираем расположение 0-горизонтаельно 1-вертикально
		let dir = this.randAB(0,1);
		let x, y;
		// произвольно выбираем координаты
		let shipSize = ship.size;
		if(dir){
			x = this.randAB(0,9);
			y = this.randAB(0,10-shipSize);
		} else{
			x = this.randAB(0,10-shipSize);
			y = this.randAB(0,9);
		}
		return {
			...ship,
			x, y, // стартовая точка корабля
			dir: dir ? 'down' : 'right'
		}
	}
	// проверка, входит ли старотовая точка нового корабля во владения другого корабля
	isPointInBorders = (xTest,yTest, ship) =>{
		let {x,y,size,dir} = ship;
		let left = x-1;
		let right = (dir == 'down' ? x+1 : x+size);
		let top = y-1;
        let bottom = (dir == 'down' ? y+size : y+1);
		if((xTest >= left && xTest <= right &&
			yTest >= top && yTest <= bottom)){
				return true;
		} else{
			return false;
		}
	}
	// проверка, выполняется ли правило игры, что интервал между кораблями минимум клетка
	isOverlapShips = (newShip,ships)=>{
        if(!ships.length) return false;
		let {x,y,size,dir} = newShip;
		return ships.some(ship =>{
			if (this.isPointInBorders(x,y,ship)) return true;
			else if(dir == 'down' && this.isPointInBorders(x,y+size-1,ship)) return true;
			else if(dir == 'right' && this.isPointInBorders(x+size-1,y,ship)) return true;
			else return false;
		})
	}
	// добавление имен героев в начале игры
	setNames = (event) =>{
		let player = event.target.name;
		let name = event.target.value;
		if(player == 'human') {
			name = name ? name : 'Супергерой';
			this.updateState({name},player);
		} else{
			name = name ? name : 'Злодей';
			this.updateState({name},player);
		}
	}
	// выбор самому расположения тораблей в начале игры
	setShips = () =>{
	}
	// инициализация игры
	initGame = () =>{
		// генерируем корабли для компьютера
		this.generateShips('computer');
		// определяем, кто ходит первый 0-комппьютер, 1-человек,
		let player = this.randAB(0,1);
		//let player = 1;
		if(player) {
			this.setState({
				game_start:true,
				game_active:'human',
				game_message: message.human
			})
		} else {
			this.setState({
				game_start:true,
				game_active:'computer',
				game_message: message.computer
			})
			setTimeout(_ =>this.computerPlaying(),2000);
		}
	}
	// ход человека
	humanPlaying = (event) =>{
		if(this.state.game_active != 'human') {
			this.setState(); return;
		}
		let x = Number(event.target.getAttribute('data-x'))
		let y = Number(event.target.getAttribute('data-y'))
		this.playing('human',x,y)
	}
	// проверка, что точка не выходит за доску и такой точки еще небыло
	checkPoint = (x,y) =>{
		let {trash,help_points} = this.state.computer;
		trash.push(...help_points);
		this.updateState({trash},'computer')
		console.log('проверялась точка',x,y)
		if(x < 0 || x > 9 || y < 0 || y > 9) return false;
		return !trash.some(point =>{
			if (x == point.x && y == point.y) return true;
			else return false;
		})
	}
	// ход компьютера
	computerPlaying = () =>{
		let {trash,last_success} = this.state.computer;
		let x,y;
		do{
			// ход в начале игры
			// ход после того, как потопил чужой корабль
			// ход от промазанной точки к новой промазанной
			if(!last_success.length){
				x = this.randAB(0,9);
				y = this.randAB(0,9);
				// ранена первая палуба чужого корабля
				// промазал после ранения чужого корабля
			} else if(last_success.length == 1){
				// если повторный ход, то есть 4 пути, куда двигаться
				x = last_success[0].x;
				y = last_success[0].y;
				let random = this.randAB(1,4)
				if (random == 1) y--;
				if (random == 2) y++;
				if (random == 3) x--;
				if (random == 4) x++;
				// ранено больше 2х палуб многопалубного чужого корабля
			} else if(last_success.length > 1){
				// нужно двигаться по вертикали если 2 точки в ряд у нас уже есть
				if(last_success[0].x == last_success[1].x){
					x = last_success[0].x;
					let randomPoint = this.randAB(0,last_success.length-1);
					let randomDel = this.randAB(0,1);
					randomDel = randomDel ? 1 : -1;
					y = last_success[randomPoint].y+randomDel;
				} else{
					y = last_success[0].y;
					let randomPoint = this.randAB(0,last_success.length-1);
					let randomDel = this.randAB(0,1);
					randomDel = randomDel ? 1 : -1;
					x = last_success[randomPoint].x+randomDel;
				}
			} else {
				console.log('НЕПРЕДВИДЕННАЯ СИТУАЦИЯ!!!!!',last_success)
			}
		} while(!this.checkPoint(x,y));
		console.log('очередная точка, прошедшая отбор',x,y)
		trash.push({x,y});
		this.updateState({trash},'computer');
		this.playing('computer',x,y)
	}

	playing = (player,x,y) =>{
		let enemy = (player == 'human' ? 'computer' : 'human');
		// получаем корабли противника
		let ships = this.state[enemy].ships;
		// получаем свой собственные ошибочные и выйгрышные точки
		let {fail_points,help_points,killed_ships,score,wonded_ships,last_success} =
			this.state[player];
		let last_point = {x,y}; let wonded;
		let result = ships.some(ship =>{
			// если удар попал по чужому кораблю
			if(this.isPointInShips(x,y,ship)){
				let wonded_num = this.getWondedShipNum(player,ship.num);
				// если это первая палуба раненного корабля
				if(wonded_num == 100){
					wonded_ships.push({
						num: ship.num,
						ship_part: [{x,y}]
					})
					wonded = [{x,y}];
				} else{
					wonded_ships[wonded_num].ship_part.push({x,y});
					wonded = wonded_ships[wonded_num].ship_part;
				}
				// если это последняя потопленная палуба чужого корабля
				if(wonded.length == ship.size){
					score++;
					killed_ships.push(wonded);
					wonded.forEach(cell =>{
						let help = this.getHelpPoints(ship);
						help_points.push(...help)
						help_points = help_points.filter(e => e.x >= 0 && e.x <=9 && e.y >= 0 && e.y <=9);
					})
					wonded_ships.splice(wonded_num,1);
					this.updateState({wonded_ships,killed_ships,help_points,last_point,score},player)
					this.soundKilled.play();
					if(score == 10) {
						this.setState({game_active: 'none',game_message: message.end})
						setTimeout(_ => this.setState({game_winner: player}),10000)
					}
					else if (enemy == 'human') {
						this.updateState({last_success:[]},player)
						setTimeout(_ => this.computerPlaying(),2000);
					}
				} else{
					// добавляем вспомогательные точки вокруг ранненого корабля
					help_points.push({x:x-1,y:y-1},{x:x+1,y:y+1},{x:x-1,y:y+1},{x:x+1,y:y-1});
					help_points = help_points.filter(e => e.x >= 0 && e.x <=9 && e.y >= 0 && e.y <=9);
					this.updateState({wonded_ships,help_points,last_point},player)
					this.soundWonded.play();
					if(enemy == 'human') {
						last_success.push(last_point);
						this.updateState({last_success},player)
						setTimeout(_ => this.computerPlaying(),2000);
					}
				}
				return true;
			}
			return false;
		})
		// если удар по противнику пришелся мимо
		if(!result){
			fail_points.push({x,y})
			this.updateState({fail_points,last_point},player);
			this.setState({game_message:message[enemy],game_active:enemy})
			this.soundFailed.play();
			if(enemy == 'computer') {
				setTimeout(_ => this.computerPlaying(),2000);
			}
		}
	}
	getWondedShipNum = (player,shipNum) =>{
		let wondedNum = 100;
		let wonded_ships = this.state[player].wonded_ships;
		wonded_ships.some((ship,i) =>{
			if(ship.num == shipNum){
				wondedNum = i;
				return true;
			} else return false;
		})
		return wondedNum;
	}
	// проверка, что удар пришелся по кораблю
	isPointInShips = (xTest,yTest,ship) =>{
		let left,right,top,bottom;
		let {x,y,size,dir} = ship;
		if(dir =='down'){
			left = x;
			right = x;
			top = y;
			bottom = y+size-1;
		} else{
			left = x;
			right = x+size-1;
			top = y;
			bottom = y;
		}
		if((xTest >= left && xTest <= right &&
			yTest >= top && yTest <= bottom)){
				return true;
		} else{
			return false;
		}
	}
	// получение вспомогательных точек вокруг потопленного корабля(чтоб исключить)
	getHelpPoints = (ship) =>{
		let {x,y,dir,size} = ship;
		let ship_mass = []; let help_points = [];
		// корабль цельный, получаем из него массив точек, чтобы вокруг них
		// добавить вспомогательные точки
		if(dir == 'right'){
			for(let i=0; i<size; i++){
				ship_mass.push({x,y});
				x++;
			}
		} else{
			for(let i=0; i<size; i++){
				ship_mass.push({x,y});
				y++;
			}
		}
		ship_mass.forEach(({x,y}) =>{
			help_points.push(
				{x:x-1,y:y-1},
				{x:x+1,y:y+1},
				{x,y:y-1},
				{x,y:y+1},
				{x:x-1,y},
				{x:x+1,y},
				{x:x-1,y:y+1},
				{x:x+1,y:y-1},
			)
		})
		// удаляем дубликаты
		let uniq = new Set(help_points.map(e => JSON.stringify(e)));
		return Array.from(uniq).map(e => JSON.parse(e));
	}

    render() {
		let state= this.state;
		let human = this.state.human;
		let computer = this.state.computer;
        return (
			<div>
				{!state.game_start ? (
					<div className="modal">
						<Settings
							set_names={this.setNames}
							set_ships={this.setShips}
							player={human.ships}
							generate_ships={this.generateShips}
							init_game={this.initGame}
						/>
					</div>) : null}
				{state.game_winner ? (
					<div className="modal">
						<div className="game_winner">
							<div>
								<a href="https://www.freepng.ru/png-y1ytxq/" target="_blank">
									<img class="winner" src={Win} />
								</a>
							</div>
							{state.game_winner == 'human' ?
								('Вы победили! Ура! :)') :
								('Вы проиграли :(')
							}
						</div>
					</div>) : null}
				<div className="game-container">
					<header className="header">
						<div>Морской бой</div>
						<div className="sound-bar" onClick={this.changeSound}>{'звук: '+(state.game_sound ? 'есть': 'нет')}</div>
							<div class="score-bar">
							{'счет: '+state.computer.score+' : '+state.human.score}
							</div>
						<input type="text" className="message-bar" value={state.game_message} readOnly />
					</header>
					<div className="content">
							<div className="left-content">
								{state.game_active == 'human' ?
									(<div className="left-mask"></div>) : null}
								<div className="avatar">
									<a href='https://pngtree.com/so/avatar' target="_blank"><img className="avatar-img" src={Avatar1} /></a>
									<div className="avatar-text">{human.name + ' (ваше поле)'}</div>
								</div>
								<Matrix
									ships={state.human.ships}
									player={computer}
									click_handler={null}
								/>
							</div>
							<div className="right-content">
								{state.game_active == 'computer' ?
								 	(<div className="right-mask"></div>) : null}
								<div className="avatar">
									<a href='https://pngtree.com/so/avatar' target="_blank"><img className="avatar-img" src={Avatar2} /></a>
									<div className="avatar-text">{computer.name + ' (поле противника)'} </div>
								</div>
								<Matrix
									ships={state.game_active == 'none' ? computer.ships : []}
									player={human}
									click_handler={this.humanPlaying}
								/>
							</div>
					</div>
				</div>
			</div>
        );
    }
}