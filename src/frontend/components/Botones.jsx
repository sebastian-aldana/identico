import React, { useState } from "react";

const HelloWorld = () => {
  const [active, setActive] = useState(true);

  const handleClick = e => {
    e.preventDefault();

    setActive(!active);
  };
  return (
    <ul
      class="nav nav-tabs mb-4 mb-md-5"
      id="myTab"
      role="tablist"
      style={{ borderBottom: "transparent" }}
    >
      <li
        class={active ? "nav-item text-center active" : " nav-item text-center"}
        id="tabUno"
      >
        <a
          class={active ? "nav-link total acti active" : "nav-link total"}
          id="lealtad-tab"
          data-toggle="tab"
          href="#lealtad"
          role="tab"
          aria-controls="lealtad"
          aria-selected="true"
          onClick={handleClick}
        >
          <span class="medio">
            PROGRAMA
            <br />
            DE LEALTAD
          </span>
        </a>
      </li>
      <li
        class={
          active ? "nav-item text-center " : " nav-item text-center active"
        }
      >
        <a
          class={active ? "nav-link total " : "nav-link total acti active"}
          onClick={handleClick}
          href="identimovil#identimovil"
        >
          <span class="medio">IDENTIMÓVIL</span>
        </a>
      </li>
      <li
        class={
          active ? "nav-item text-center " : " nav-item text-center active"
        }
      >
        <a
          class={active ? "nav-link total " : "nav-link total acti active"}
          onClick={handleClick}
          href="identinet#identinet"
        >
          <span class="medio">IDÉNTINET</span>
        </a>
      </li>
      <li
        class={
          active ? "nav-item text-center " : " nav-item text-center active"
        }
      >
        <a
          class={active ? "nav-link total " : "nav-link total acti active"}
          onClick={handleClick}
          href="mantenimineto-correctivo-y-preventivo#mantenimiento"
        >
          <span class="medio">
            MANTENIMIENTO
            <br />
            CORRECTIVO Y<br />
            PREVENTIVO
          </span>
        </a>
      </li>
    </ul>
  );
};

export default HelloWorld;
