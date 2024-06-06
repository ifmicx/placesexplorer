<?php
    function stampaHeader() {
        echo '<nav>
            <div class="logo"><a href="../index.html"><img src="../img/logo.png" alt="Home" width="200" height="66"></a></div>
            <input type="checkbox" class="toggler" />
            <div class="hamburger"><div></div></div>
            <div class="menu">
            <button id="dark-switch" onclick="darkmode()">🌙</button>
            <a class="menu-item" href="../index.html">Home</a>
            <a class="menu-item active" href="./about.html">Su di noi</a>
            <a class="menu-item" href="./places.html">Posti</a>
            <a class="menu-item" href="./contacts.html">Contatti</a>
            </div>
        </nav>';
    }
?>