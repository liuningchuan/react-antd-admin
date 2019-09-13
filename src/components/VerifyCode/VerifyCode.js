import React from 'react';

import ('./VerifyCode.scss');

class VerifyCode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yzm: false,
            marg: 0,
            str: [1, 2, 3, 'a', 'a'],
            color0: 'red',
            color1: 'black',
            color2: 'green',
            color3: 'grey',
            color4: 'blue'
        };
        this.getyzm = this.getyzm.bind(this);
        this.rnd_str = this.rnd_str.bind(this);
    }

    getyzm(item) {

        this.setState({
            marg: 57
        });
        this.rnd_str(5, true, true, true);
    }

    rnd_str = (str_0, str_1, str_2, str_3) => {
        console.log('1224');
        const Seed_array = [];
        let seedary;
        let i;

        Seed_array[0] = '';
        Seed_array[1] = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
        Seed_array[2] = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
        Seed_array[3] = '0 1 2 3 4 5 6 7 8 9';


        if (!str_1 && !str_2 && !str_3) {
            str_1 = true;
            str_2 = true;
            str_3 = true;
        }

        if (str_1) {
            Seed_array[0] += Seed_array[1];
        }
        if (str_2) {
            Seed_array[0] += ' ' + Seed_array[2];
        }
        if (str_3) {
            Seed_array[0] += ' ' + Seed_array[3];
        }

        Seed_array[0] = Seed_array[0].split(' ');
        seedary = '';
        for (i = 0; i < str_0; i++) {
            seedary += Seed_array[0][Math.round(Math.random() * (Seed_array[0].length - 1))];
        }
        this.setState({str: seedary});
        //下面为生成的字符串中的字符生成随机颜色
        this.setState({
            color0: this.getColor(),
            color1: this.getColor(),
            color2: this.getColor(),
            color3: this.getColor(),
            color4: this.getColor(),
        });
    }
    //生成随机颜色
    getColor = () => {
        const colorElements = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';
        const colorArray = colorElements.split(',');
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += colorArray[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    render() {
        return (
            <div style={{ display: this.state.yzm ? "none" : 'flex', alignItems: ' center' }}>
                <div onClick={this.getyzm} className='yzmbg' style={{ marginLeft: 10, height: 40, width: 120, border: '1px solid #E5E6EA', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around', overflow: 'hidden' }}>
                    <span style={{ color: this.state.color0, fontSize: Math.floor(Math.random() * 23 + 20), transform: 'rotate(' + Math.floor(Math.random() * 90 + 1) + 'deg)' }}>{this.state.str[0]}</span>
                    <span style={{ color: this.state.color1, fontSize: Math.floor(Math.random() * 23 + 20), transform: 'rotate(' + Math.floor(Math.random() * 90 + 1) + 'deg)' }}>{this.state.str[1]}</span>
                    <span style={{ color: this.state.color2, fontSize: Math.floor(Math.random() * 23 + 20), transform: 'rotate(' + Math.floor(Math.random() * 90 + 1) + 'deg)' }}>{this.state.str[2]}</span>
                    <span style={{ color: this.state.color3, fontSize: Math.floor(Math.random() * 23 + 20), transform: 'rotate(' + Math.floor(Math.random() * 90 + 1) + 'deg)' }}>{this.state.str[3]}</span>
                    <span style={{ color: this.state.color4, fontSize: Math.floor(Math.random() * 23 + 20), transform: 'rotate(' + Math.floor(Math.random() * 90 + 1) + 'deg)' }}>{this.state.str[4]}</span>
                </div>
            </div>
        );
    }
}

export default VerifyCode;