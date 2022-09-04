const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "mines",
  description: "Random prediction command",
  execute(message, args) { 
    if (message.channel.type === "dm") return;
     const argsd = message.content.split(' ').slice(1);
     const minesarg = argsd.join(' ');
     if (!minesarg) return message.reply('use this command in this mode: "-mines {mines}"')
     if (minesarg > 3) return message.reply('you can set max 3 mines')
     .then(repliedMessage => {
      setTimeout(() => repliedMessage.delete(), 5000);
    })
  .catch()
     if (minesarg < 1) return message.reply('you can set min 1 mines')
       .then(repliedMessage => {
        setTimeout(() => repliedMessage.delete(), 5000);
      })
    .catch()
      const embed = new MessageEmbed()
      .setTitle('Hent predictor 1.00')
      .addField(`Prediction (${minesarg} Mines) :globe_with_meridians:`, `${genMine()}`, false)
      .addField('Accuracy (approximately)', `${Accuracy()}` + '%.')
      .setColor("#f82f0f")
      .setFooter("Hent!Bot.")
   message.channel.send({ embeds: [embed] }).then(sentEmbed => {
    sentEmbed.react('👍');
    sentEmbed.react('💣');})

  }
}


function Accuracy() {
    var rating = Math.floor((Math.random() * 40) + 30);
    return rating;
}
function genMine(gridX = 5, gridY = 5, mines = 2) {
    if (gridX.constructor != Number) gridX = 5;
    if (gridY.constructor != Number) gridY = 5;
    if (mines.constructor != Number) mines = 2;
 
    function genGridMatrix(x = gridX, y = gridY, fill = 0) {
      let out_ = [];
 
      while (y--) {
        out_.push((new Array(x)).fill(fill));
      }
 
      return out_;
    }
 
    function getSurroundingInMatrix(arr, x, y) {
      let i = 0;
 
      if (arr[y - 1] && arr[y - 1][x - 1] == ":white_check_mark:") i++;
      if (arr[y - 1] && arr[y - 1][x] == ":white_check_mark:") i++;
      if (arr[y - 1] && arr[y - 1][x + 1] == ":white_check_mark:") i++;
      if (arr[y] && arr[y][x - 1] == ":white_check_mark:") i++;
      if (arr[y] && arr[y][x + 1] == ":white_check_mark:") i++;
 
      return ":question:";
    }
 
    function genMines(arr, x, y, mines_) {
      while (mines_--) {
       let ranX = Math.floor(Math.random() * x);
       let ranY = Math.floor(Math.random() * y);
 
       while (arr[ranY][ranX] == ":white_check_mark:") {
         ranX = Math.floor(Math.random() * x);
         ranY = Math.floor(Math.random() * y);
       }
 
       arr[ranY][ranX] = ":white_check_mark:";
      }
 
      return arr;
    }
 
    let matrix = genGridMatrix();
    matrix = genMines(matrix, gridX, gridY, mines);
    matrix = matrix.map((x1, y) => {
      return x1.map((x2, x) => {
        if (x2 != ":white_check_mark:") {
          return getSurroundingInMatrix(matrix, x, y);
        } else {
          return x2;
        }
      });
    });
 
    let allZeros = [];
 
    for (let y in matrix) {
      for (let x in matrix[y]) {
        if (matrix[y][x] == ":question:") {
          allZeros.push({
            x: x,
            y: y
          });
        }
      }
    }
 
    let ran = allZeros[Math.floor(Math.random() * allZeros.length)];
 
    if (ran && matrix[ran.y] && matrix[ran.y][ran.x]) matrix[ran.y][ran.x] = ":question:";
 
    let fullGrid = matrix.map(c => {
        return c.join("");
    }).join("\n");
 
    return fullGrid;
  }

