import React from 'react';
import css from './Menu.module.css';
import {Link} from 'react-router-dom';

export function Menu() {

    return (
        <div className={css.container}>
            <Link
                to='/game'
                className={css.nav}
            >START</Link>
            <Link
                to='/chooseSnake'
                className={css.nav}
            >Choose Snake</Link>
            <Link
                to='/highScore'
                className={css.nav}

            >High Score</Link>
        </div>
    )
}

export function ChooseSnake(props) {
    function choice(e) {
        props.store.chooseModel = e.target.dataset.num;
        props.store.recordSpeed = e.target.dataset.num;
    }

    const fragments = [...new Array(12).keys()];
    return (
        <div className={css.bg}>{
            fragments.map((frag) => (
                    <div
                        key={frag}
                        onClick={choice}
                        className={css.icon}
                        data-num={frag + 1}>
                         <div className={css[`s${frag}`]} data-num={frag + 1}/>
                         <div className={css.string} >SPEED</div>
                         <div className={css.scale}>{scale(frag)}</div>
                    </div>
                )
            )
        }
        </div>
    )
}

function scale(frag) {
    const number = frag < 3 ? 1  :
        frag < 5 ? 2 :
            frag < 7 ? 3 :
                frag < 10 ? 4 :
                    frag < 11 ? 5 : 6;
   return [...new Array(number).keys()].map(i => <div key={i} className={css.cell} />)
}


export function HighScore(props) {
    let list;

    fetch('http://www.mocky.io/v2/5e5910f72f0000be0c96240e')
    .then(response => {
          if(response.status !== 200) {
              return new Error(response.statusText)
          }
          return response
      })
    .then(response => response.json())
    .then( data => console.log(data))
    .catch(error => console.log(error));

    return (
        <div className={css.bgHS}>
            <div className={css.banner}/>
            <ul>{
                props.store.highScore.map((item, ind) => (
                    <li
                        key={ind}
                        className={css.li}>{
                            <>
                            <span>{`${ind + 1}. `}</span>
                            <span>{Object.keys(item)}</span>
                            <span className={css.score}>{item[Object.keys(item)]}</span>
                            </>
                    }</li>
                ))
            }</ul>
        </div>
    )
}