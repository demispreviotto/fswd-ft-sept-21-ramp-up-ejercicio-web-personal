
.container-carrousel {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    height: 80%;
    width: 80%;
    overflow: hidden;
    background: gray;
}

.image-carrousel {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rebeccapurple;
    transition: left 1s;
    z-index: 10;
}

.slider-carrousel {
    width: 15%;
    height: 100%;
    z-index: 30;
}

.slider-carrousel:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.display-carrousel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    width: 40%;
    height: 50px;
    /* background: purple; */
    z-index: 29;
}

.position {
    margin: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
}

.active-position {
    background-color: rgba(255, 255, 255, 0.5);
}


--------------------------
        <!-- <div class="carrousel"> -->
        <div class="carrousel-container">
            <div id="left-slider" class="slider-carrousel"></div>
            <div id="image-carrousel-1" class="image-carrousel"></div>
            <div id="display" class="display-carrousel">
                <div class="position active-position"></div>
                <div class="position"></div>
                <div class="position"></div>
            </div>
            <div id="right-slider" class="slider-carrousel"></div>
        </div>
