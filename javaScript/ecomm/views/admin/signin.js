const layout=require("./layout")
module.exports = ({ req }) => {
  return layout({content:`
  <div>
    <form method="POST">
      <input name="email" type="text" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button>signin</button>
    </form>
  </div>
 `})
};
