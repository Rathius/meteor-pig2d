# pig2d for Meteor
HTML5 2D game engine 

# How to use
meteor add esparty:pig2d

# example

resource

    /public/res/av8_harrier.png

main.html

    <head>
      <title>pig2dmeteor</title>
    </head>
    
    <body>
      {{> main}}
    </body>
    
    <template name="main">
        <div class="pig2d-fullscreen" >
            <p id ='text-framerate-info' style="position: absolute" >frame rate</p>
        </div>
    </template>

main.js

    if (Meteor.isClient) {
        Template.main.onCreated(function () {
            function main(evt) {
    
                var textures = evt.textures;
    
                //씬메니져 생성하기
                var Smgr = new Pig2d.SceneManager({
                    container: document.querySelector('.pig2d-fullscreen')
                });
    
                //스프라이트 노드 만들기
                var node = Pig2d.util.createSlicedImage({
                    imgObj: textures['av8_harrier.png'],
                    basex: -textures['av8_harrier.png'].width / 2,
                    basey: -textures['av8_harrier.png'].height / 2
                });
    
                node.get('model').setPosition(300, 200);
    
                //씬메니져 등록하기
                Smgr.add(node);
    
                //컨트롤러 설정
                Pig2d.util.setup_pig2dTestController(
                    document, //이벤트를 받을 대상 (여기서는 화면 전체임)
                    node//조종할 대상이 되는 오브잭트
                );
    
                //게임루프시작
                Pig2d.system.startGameLoop({
    
                    framerate_info_element: document.querySelector("#text-framerate-info"),
                    gameLoopCallBack: function (deltaTime) {
    
                        //씬메니져 업데이트
                        //여기서 모든 노드들의 최신상태가 화면에 반영이 된다.
                        Smgr.updateAll(deltaTime);
    
                    },
                    loopCount_limit: 30
                });
    
            }
    
    
            Pig2d.util.SetupAsset({
                asset_path: "/res/",
                img_files: [
                    "av8_harrier.png"
                ],
                OnLoadComplete: main
    
            });
        })
    
    }
    
    if (Meteor.isServer) {
        Meteor.startup(function () {
            // code to run on server at startup
        });
    }