
var DemoLayer = cc.Layer.extend({
    init:function () {
        this._super();

        // close fps display
        cc.Director.getInstance().setDisplayStats(false);

        // get window size
        var winSize = cc.Director.getInstance().getWinSize();

        // create title
        var demoTitle = cc.LabelTTF.create("CircleLabelTTF Demo", "Arial Black", 26);
        demoTitle.setVerticalAlignment(cc.VERTICAL_TEXT_ALIGNMENT_CENTER);
        demoTitle.setPosition(cc.p(winSize.width / 2, winSize.height - 30));
        this.addChild(demoTitle, 1);

        // create info label
        this.infoLabel = cc.LabelTTF.create("Touch to expand/shrink Label", "Arial", 20);
        this.infoLabel.setPosition(cc.p(winSize.width / 2, winSize.height - 80));
        this.addChild(this.infoLabel);
		
		// create CircleLabelTTF
		this._circleLabelTTF = CircleLabelTTF.create("CircleLabelTTF", new Array("c", "o", "c", "o", "s", "2", "D", "-", "H", "T", "M", "L", "5"), 150);
        this._circleLabelTTF.setPosition(cc.p(winSize.width / 2, winSize.height / 2));
        this.addChild(this._circleLabelTTF);
		
		// enable mouse
		if( 'mouse' in sys.capabilities ) {
            this.setMouseEnabled(true);
        }
        return true;
    },
	onMouseDown:function (event) {
		if (this._circleLabelTTF.isExpanding())
			this._circleLabelTTF.shrinkTTF();
		else
			this._circleLabelTTF.expandTTF();
    },
});

var DemoScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new DemoLayer();
        layer.init();
        this.addChild(layer);
    }
});

