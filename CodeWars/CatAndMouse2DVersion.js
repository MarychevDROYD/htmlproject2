function catMouse(map,moves){

//перенные мыши и кошки/поиск индекса мыши и кошки
  
  const indexc = map.indexOf('C')
  const indexm = map.indexOf('m')

//есть ли мышь или кошка на карте

  if (indexc === -1 || indexm === -1) {
return 'boring without two animals'
}
  
//количество символов в строке карты, ('\n') - индекс символа новой строки, +1 чтобы символ новой строки тоже посчитался

  const l = map.indexOf('\n') + 1

//вычисление расстояния между котом и мышкой

const s = Math.abs(indexc % l - indexm % l) + Math.abs(parseInt(indexc / l) - parseInt(indexm / l))

//сможет ли кот поймать мышь(проверка)

if(s > moves) {
  return 'Escaped!';
}else{
  return 'Caught!'
}
}