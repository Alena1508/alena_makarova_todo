import React from 'react';
import  './content.scss';



const Time = () => <time>{ new Date().toTimeString() }</time>; // если не большой компонент, то можно в одну строку и подключить в этом же файле, а не создавать отдельный файл для него
export const Content = () => (
  <div className={'content'}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias amet blanditiis commodi, eos error eveniet labore laborum maxime, perferendis quia repudiandae, suscipit tempore tenetur veniam! Aut magni optio quas!
    </p>
    <Time />
  </div>
);
