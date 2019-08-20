import React, { Component } from "react";
import Uno from "../../post/uno.jpg";
import "../../css/articulo.css";

const Titulo = props => {
  console.log(props.id);
  const posts = require("../../json/posts.json");

  return (
    <>
      {posts.data.map(post => {
        if (post.url == props.id) {
          return (
            <div>
              <div className="articulo-titulo">
                <h2>{post.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  itaque veniam dolores laborum optio eligendi reiciendis earum
                  repellat tempora, dolore est exercitationem quibusdam delectus
                  fuga obcaecati voluptatem maiores natus! Soluta.
                </p>
                <img src={require("../../post/" + post.img)} alt="" />
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae quo unde non molestiae fugiat voluptates et, error
                impedit voluptatum dicta quasi autem iste expedita quaerat
                sequi, vitae, dignissimos ducimus assumenda. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Nihil officiis excepturi
                ex, numquam consectetur quod, cumque inventore iure deserunt
                reprehenderit facere quos sint molestias eaque. Laudantium
                temporibus laborum voluptatum debitis. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Amet eius saepe, laudantium
                et illum odit reprehenderit aliquid aut, in itaque nulla
                deserunt voluptate cumque, illo sed voluptatibus dicta magnam.
                In! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Neque fuga quibusdam doloribus velit magnam veritatis, dolor
                vero odit cum laudantium tenetur tempore nobis consectetur ut
                facilis officia molestias nam veniam? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Dolore necessitatibus atque
                quo quod laudantium! Suscipit debitis quisquam laudantium, a
                sequi fuga. Ab fugiat accusantium nulla consectetur illo maxime
                veniam commodi!
              </p>
            </div>
          );
        }
      })}
    </>
  );
};
export default Titulo;
