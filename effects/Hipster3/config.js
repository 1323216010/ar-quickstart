function Effect() {
    var self = this;

    this.init = function() {
        Api.meshfxMsg("spawn", 2, 0, "!glfx_FACE");

        Api.meshfxMsg("spawn", 0, 0, "face.bsm2");
        Api.meshfxMsg("tex", 2, 1, "face_low_BaseColor.png");
        Api.meshfxMsg("spawn", 1, 0, "hat.bsm2");

        Api.playSound("music.ogg", true, 1);

        Api.showHint("Tap");
        
        Api.showRecordButton();
    };

    this.restart = function() {
        Api.meshfxReset();
        Api.stopSound("music.ogg");
        self.init();
    };

    this.faceActions = [];
    this.noFaceActions = [];

    this.videoRecordStartActions = [];
    this.videoRecordFinishActions = [];
    this.videoRecordDiscardActions = [this.restart];
}

var beard = true;

function onTouchesBegan() {

    Api.hideHint();
    
    if(beard) {
        Api.meshfxMsg("tex", 2, 1, "face_low_BaseColor2.png");
    } else {
        Api.meshfxMsg("tex", 2, 1, "face_low_BaseColor.png");
    }
    
    beard = !beard;
}

configure(new Effect());