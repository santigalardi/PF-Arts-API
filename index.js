//                              .--.---.
//                            _ |||||||| _
//                            \\\  |   |//
//                             \_   \  ./
//                  .--.         \   \/           .--.
//                  ||||_        /\.  `\         _||||
//                  |  ||      ./  /\   \        ||  |
//                  |  /     ./   /  \   `\      \   |
//                  |  |    /    /    `\   \      \  |
//    .--.        |  |   /   ./  ___  \   \     |  |       .--.
//     //| \        |  |   |   |.-'''\``\\   |    |  |       / |\\
//     \\\| \       |  |   |   /    __|__|   |    |  |      /  ///
//      ``\  \      |  |   |  `.   /     \   |    |  |     /  /''
//         \  \     `   \  |   |(\/ o  o |   |   /   '    /  .'
//         `   `     \   \ |   |`\    u  |   | ./   /    /   /
//          \   `_    \   `\    \ \  -- /    |/    /    /   /
//           \    `---.\    \    \/`-._/\   //    /   _/   /
//            \_        `  _-    /       ` .-  .-----'    /
//              `---.___ /'                     \        /
//                     ./                        \------'
//                    /    .-'|            |/\    \
//                 _./    /'  /             \ `\   `-.
//            __.-'     /'   |  o   |  \   o |  `\    `-._
//   ____.--'     __.-'      \____/    \___/     `_._    `--._____
//   /===.____.---'            |           |          `----.____===\
//                             \           /
//                             |           |
//                             /           \
//                            |             |
//                           /              \ __.-----.__
//                      ____--           -'  ___.       )
//                   _.-'          \    /  _-'           /
//                 ./     _.-_._  __/-./--'          _.-'
//                (            `-.______     ___.--'/
//                  \_                   `---'  ___/'
//                    `--._______.---------:F_P:'

/* ------------------------------------------------ */
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { createPredefinedCategories } = require('./src/db.js');

//Setting environment variables.
require('dotenv').config();
const PORT = process.env.PORT || 3001;

// Syncing all the models at once.

conn
  .sync({ alter: true })
  // .sync({ force: true })
  .then(() => createPredefinedCategories())
  .then(() => {
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`);
    });
  });
