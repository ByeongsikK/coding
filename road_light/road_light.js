$(document).ready(function () {


    // -----고장신고-----
    $(`.menu a:first`).click(function () {
        $(`.main`).hide();
        $(`.sec3`).hide();
        $(`sec2`).hide();
        $(`.sec1`).show();
        $(`.my_minwon`).show();
        $(`.logout`).hide();
        $(`.ganpyeon_bt`).addClass(`singo_sign`).end();
        $(`.ganpyeon_bt.singo_sign`).click(function () {
            $(`.sec1`).hide();
            $(`.sec3`).hide();
            $(`.sec2`).show();
            $(`.my_minwon`).hide();
            $(`.logout`).show();
            $(`.menu a:last`).click(function () {
                $(`.menu a:first`).addClass(`singo2`).end();
                $(`.singo2`).click(function () {
                    $(`.sec1`).hide();
                    $(`.sec2`).show();
                    $(`.sec3`).hide();
                    $(`.my_minwon`).hide();
                    $(`.logout`).show();

                    // -----카카오 맵-----
                    $(`#map`).show(function () {
                        var mapContainer = document.getElementById('map'),
                            // 지도를 표시할 div 

                            mapOption = {
                                center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                                level: 3 // 지도의 확대 레벨
                            };

                        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                        var positions = [{
                                title: '가로등1',
                                latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                            },
                            {
                                title: '가로등2',
                                latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                            },
                            {
                                title: '가로등3',
                                latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                            },
                            {
                                title: '가로등4',
                                latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                            }
                        ];

                        // 마커 이미지의 이미지 주소입니다
                        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                        for (var i = 0; i < positions.length; i++) {

                            // 마커 이미지의 이미지 크기 입니다
                            var imageSize = new kakao.maps.Size(24, 35);

                            // 마커 이미지를 생성합니다    
                            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                            // 마커를 생성합니다
                            var marker = new kakao.maps.Marker({
                                map: map, // 마커를 표시할 지도
                                position: positions[i].latlng, // 마커를 표시할 위치
                                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                                image: markerImage // 마커 이미지 
                            });
                        };
                        // -----카카오 맵-----

                        // ----- 지도 마커 클릭 이벤트-----
                        $(`img[title=가로등1`).click(function () {
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n1`).show();
                            $(`.photo_box.n1`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo2`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).hide();
                            $(`.garo1`).show();
                        });

                        $(`img[title=가로등2`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n2`).show();
                            $(`.photo_box.n2`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).hide();
                            $(`.garo2`).show();
                        });

                        $(`img[title=가로등3`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n3`).show();
                            $(`.photo_box.n3`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo2`).hide();
                            $(`.garo4`).hide();
                            $(`.garo3`).show();
                        });

                        $(`img[title=가로등4`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).show();
                            $(`.photo_box.n4`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo2`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).show();
                        });
                        // ----- 지도 마커 클릭 이벤트-----
                    });

                    // 로그아웃 추가!!!
                    $(`.logout`).click(function () {
                        $(`.sec1`).hide();
                        $(`.sec2`).hide();
                        $(`.sec3`).hide();
                        $(`.main`).show();
                        $(`.logout`).hide();
                        $(`.my_minwon`).show();
                        $(`.my_list`).hide();
                        $(`.ganpyeon_bt`).removeClass(`singo_sign`);
                        $(`.ganpyeon_bt`).removeClass(`cheoli_sign`);
                        $(`.menu a:first`).removeClass(`singo2`);
                        $(`.menu a:last`).removeClass(`cheoli2`);
                        $(`.menu a:last`).removeClass(`cheoli1`);
                        $(`.menu a:last`).click(function() {
                            $(`.main`).hide();
                            $(`.sec3`).show();
                            $(`.my_list`).hide();
                            $(`.sec1`).hide();
                        });
                        $(`.menu a:first`).click(function() {
                            $(`.main`).hide();
                            $(`.sec3`).hide();
                            $(`sec2`).hide();
                            $(`.sec1`).show();
                            $(`.my_minwon`).show();
                            $(`.logout`).hide();
                            $(`.ganpyeon_bt`).addClass(`singo_sign`).end();
                            $(`.ganpyeon_bt.singo_sign`).click(function () {                    
                                $(`.sec1`).hide();
                                $(`.sec3`).hide();
                                $(`.sec2`).show();
                                $(`.my_minwon`).hide();
                                $(`.logout`).show();          
                                $(`.menu a:last`).click(function () {
                                    $(`.menu a:first`).addClass(`singo2`).end();
                                    $(`.singo2`).click(function () {
                                        $(`.sec1`).hide();
                                        $(`.sec2`).show();
                                        $(`.sec3`).hide();
                                        $(`.my_minwon`).hide();
                                        $(`.logout`).show();
                    
                                        // -----카카오 맵-----
                                        $(`#map`).show(function () {
                                            var mapContainer = document.getElementById('map'),
                                                // 지도를 표시할 div 
                    
                                                mapOption = {
                                                    center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                                                    level: 3 // 지도의 확대 레벨
                                                };
                    
                                            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
                    
                    
                                            var positions = [{
                                                    title: '가로등1',
                                                    latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                                                },
                                                {
                                                    title: '가로등2',
                                                    latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                                                },
                                                {
                                                    title: '가로등3',
                                                    latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                                                },
                                                {
                                                    title: '가로등4',
                                                    latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                                                }
                                            ];
                    
                                            // 마커 이미지의 이미지 주소입니다
                                            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                    
                                            for (var i = 0; i < positions.length; i++) {
                    
                                                // 마커 이미지의 이미지 크기 입니다
                                                var imageSize = new kakao.maps.Size(24, 35);
                    
                                                // 마커 이미지를 생성합니다    
                                                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                    
                                                // 마커를 생성합니다
                                                var marker = new kakao.maps.Marker({
                                                    map: map, // 마커를 표시할 지도
                                                    position: positions[i].latlng, // 마커를 표시할 위치
                                                    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                                                    image: markerImage // 마커 이미지 
                                                });
                                            };
                                            // -----카카오 맵-----
                    
                                            // ----- 지도 마커 클릭 이벤트-----
                                            $(`img[title=가로등1`).click(function () {
                                                $(`.photo_box.n2`).hide();
                                                $(`.photo_box.n3`).hide();
                                                $(`.photo_box.n4`).hide();
                                                $(`.photo_box.n1`).show();
                                                $(`.photo_box.n1`).css('display', 'flex');
                                                $(`.garo0`).hide();
                                                $(`.garo2`).hide();
                                                $(`.garo3`).hide();
                                                $(`.garo4`).hide();
                                                $(`.garo1`).show();
                                            });
                    
                                            $(`img[title=가로등2`).click(function () {
                                                $(`.photo_box.n1`).hide();
                                                $(`.photo_box.n3`).hide();
                                                $(`.photo_box.n4`).hide();
                                                $(`.photo_box.n2`).show();
                                                $(`.photo_box.n2`).css('display', 'flex');
                                                $(`.garo0`).hide();
                                                $(`.garo1`).hide();
                                                $(`.garo3`).hide();
                                                $(`.garo4`).hide();
                                                $(`.garo2`).show();
                                            });
                    
                                            $(`img[title=가로등3`).click(function () {
                                                $(`.photo_box.n1`).hide();
                                                $(`.photo_box.n2`).hide();
                                                $(`.photo_box.n4`).hide();
                                                $(`.photo_box.n3`).show();
                                                $(`.photo_box.n3`).css('display', 'flex');
                                                $(`.garo0`).hide();
                                                $(`.garo1`).hide();
                                                $(`.garo2`).hide();
                                                $(`.garo4`).hide();
                                                $(`.garo3`).show();
                                            });
                    
                                            $(`img[title=가로등4`).click(function () {
                                                $(`.photo_box.n1`).hide();
                                                $(`.photo_box.n2`).hide();
                                                $(`.photo_box.n3`).hide();
                                                $(`.photo_box.n4`).show();
                                                $(`.photo_box.n4`).css('display', 'flex');
                                                $(`.garo0`).hide();
                                                $(`.garo1`).hide();
                                                $(`.garo2`).hide();
                                                $(`.garo3`).hide();
                                                $(`.garo4`).show();
                                            });
                                            // ----- 지도 마커 클릭 이벤트-----
                                        });
                                    });
                                });
                                $(`.menu a:last`).addClass(`cheoli2`).end();
                                $(`.cheoli2`).click(function () {
                                    $(`.sec1`).hide();
                                    $(`.sec2`).hide();
                                    $(`.sec3`).show();
                                    $(`.my_list`).show();
                                    $(`.my_minwon`).hide();
                                    $(`.logout`).show();
                                });
                    
                    
                                // -----카카오 맵-----
                                $(`#map`).show(function () {
                                    var mapContainer = document.getElementById('map'),
                                        // 지도를 표시할 div 
                    
                                        mapOption = {
                                            center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                                            level: 3 // 지도의 확대 레벨
                                        };
                    
                                    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
                    
                    
                                    var positions = [{
                                            title: '가로등1',
                                            latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                                        },
                                        {
                                            title: '가로등2',
                                            latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                                        },
                                        {
                                            title: '가로등3',
                                            latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                                        },
                                        {
                                            title: '가로등4',
                                            latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                                        }
                                    ];
                    
                                    // 마커 이미지의 이미지 주소입니다
                                    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                    
                                    for (var i = 0; i < positions.length; i++) {
                    
                                        // 마커 이미지의 이미지 크기 입니다
                                        var imageSize = new kakao.maps.Size(24, 35);
                    
                                        // 마커 이미지를 생성합니다    
                                        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                    
                                        // 마커를 생성합니다
                                        var marker = new kakao.maps.Marker({
                                            map: map, // 마커를 표시할 지도
                                            position: positions[i].latlng, // 마커를 표시할 위치
                                            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                                            image: markerImage // 마커 이미지 
                                        });
                                    };
                                    // -----카카오 맵-----
                    
                                    // ----- 지도 마커 클릭 이벤트-----
                                    $(`img[title=가로등1`).click(function () {
                                        $(`.photo_box.n2`).hide();
                                        $(`.photo_box.n3`).hide();
                                        $(`.photo_box.n4`).hide();
                                        $(`.photo_box.n1`).show();
                                        $(`.photo_box.n1`).css('display', 'flex');
                                        $(`.garo0`).hide();
                                        $(`.garo2`).hide();
                                        $(`.garo3`).hide();
                                        $(`.garo4`).hide();
                                        $(`.garo1`).show();
                                    });
                    
                                    $(`img[title=가로등2`).click(function () {
                                        $(`.photo_box.n1`).hide();
                                        $(`.photo_box.n3`).hide();
                                        $(`.photo_box.n4`).hide();
                                        $(`.photo_box.n2`).show();
                                        $(`.photo_box.n2`).css('display', 'flex');
                                        $(`.garo0`).hide();
                                        $(`.garo1`).hide();
                                        $(`.garo3`).hide();
                                        $(`.garo4`).hide();
                                        $(`.garo2`).show();
                                    });
                    
                                    $(`img[title=가로등3`).click(function () {
                                        $(`.photo_box.n1`).hide();
                                        $(`.photo_box.n2`).hide();
                                        $(`.photo_box.n4`).hide();
                                        $(`.photo_box.n3`).show();
                                        $(`.photo_box.n3`).css('display', 'flex');
                                        $(`.garo0`).hide();
                                        $(`.garo1`).hide();
                                        $(`.garo2`).hide();
                                        $(`.garo4`).hide();
                                        $(`.garo3`).show();
                                    });
                    
                                    $(`img[title=가로등4`).click(function () {
                                        $(`.photo_box.n1`).hide();
                                        $(`.photo_box.n2`).hide();
                                        $(`.photo_box.n3`).hide();
                                        $(`.photo_box.n4`).show();
                                        $(`.photo_box.n4`).css('display', 'flex');
                                        $(`.garo0`).hide();
                                        $(`.garo1`).hide();
                                        $(`.garo2`).hide();
                                        $(`.garo3`).hide();
                                        $(`.garo4`).show();
                                    });
                                    // ----- 지도 마커 클릭 이벤트-----
                                });
                            });
                        });
                    });





                });
            });
            $(`.menu a:last`).addClass(`cheoli2`).end();
            $(`.cheoli2`).click(function () {
                $(`.sec1`).hide();
                $(`.sec2`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
                $(`.my_minwon`).hide();
                $(`.logout`).show();
            });


            // -----카카오 맵-----
            $(`#map`).show(function () {
                var mapContainer = document.getElementById('map'),
                    // 지도를 표시할 div 

                    mapOption = {
                        center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                        level: 3 // 지도의 확대 레벨
                    };

                var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                var positions = [{
                        title: '가로등1',
                        latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                    },
                    {
                        title: '가로등2',
                        latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                    },
                    {
                        title: '가로등3',
                        latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                    },
                    {
                        title: '가로등4',
                        latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                    }
                ];

                // 마커 이미지의 이미지 주소입니다
                var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                for (var i = 0; i < positions.length; i++) {

                    // 마커 이미지의 이미지 크기 입니다
                    var imageSize = new kakao.maps.Size(24, 35);

                    // 마커 이미지를 생성합니다    
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: positions[i].latlng, // 마커를 표시할 위치
                        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        image: markerImage // 마커 이미지 
                    });
                };
                // -----카카오 맵-----

                // ----- 지도 마커 클릭 이벤트-----
                $(`img[title=가로등1`).click(function () {
                    $(`.photo_box.n2`).hide();
                    $(`.photo_box.n3`).hide();
                    $(`.photo_box.n4`).hide();
                    $(`.photo_box.n1`).show();
                    $(`.photo_box.n1`).css('display', 'flex');
                    $(`.garo0`).hide();
                    $(`.garo2`).hide();
                    $(`.garo3`).hide();
                    $(`.garo4`).hide();
                    $(`.garo1`).show();
                });

                $(`img[title=가로등2`).click(function () {
                    $(`.photo_box.n1`).hide();
                    $(`.photo_box.n3`).hide();
                    $(`.photo_box.n4`).hide();
                    $(`.photo_box.n2`).show();
                    $(`.photo_box.n2`).css('display', 'flex');
                    $(`.garo0`).hide();
                    $(`.garo1`).hide();
                    $(`.garo3`).hide();
                    $(`.garo4`).hide();
                    $(`.garo2`).show();
                });

                $(`img[title=가로등3`).click(function () {
                    $(`.photo_box.n1`).hide();
                    $(`.photo_box.n2`).hide();
                    $(`.photo_box.n4`).hide();
                    $(`.photo_box.n3`).show();
                    $(`.photo_box.n3`).css('display', 'flex');
                    $(`.garo0`).hide();
                    $(`.garo1`).hide();
                    $(`.garo2`).hide();
                    $(`.garo4`).hide();
                    $(`.garo3`).show();
                });

                $(`img[title=가로등4`).click(function () {
                    $(`.photo_box.n1`).hide();
                    $(`.photo_box.n2`).hide();
                    $(`.photo_box.n3`).hide();
                    $(`.photo_box.n4`).show();
                    $(`.photo_box.n4`).css('display', 'flex');
                    $(`.garo0`).hide();
                    $(`.garo1`).hide();
                    $(`.garo2`).hide();
                    $(`.garo3`).hide();
                    $(`.garo4`).show();
                });
                // ----- 지도 마커 클릭 이벤트-----
            });
        });
    });



    $(`.main .left_bt`).click(function () {
        $(`.main`).hide();
        $(`.sec3`).hide();
        $(`.sec1`).show();
        $(`.menu a:first`).click(function() {
            $(`.main`).hide();
            $(`.sec3`).hide();
            $(`.sec2`).hide();
            $(`.sec1`).show();
        });
        $(`.menu a:last`).click(function() {
            $(`.logout`).hide();
            $(`.my_minwon`).show();
            $(`.my_minwon`).click(function() {
                $(`.sec2`).hide();
            $(`.sec3`).hide();
            $(`.sec1`).show();
            $(`.my_list`).hide();
            $(`.menu a:last`).addClass(`cheoli1`).end();
            $(`.cheoli1`).click(function () {
                $(`.main`).hide();
                $(`.sec2`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
                $(`.sec1`).hide();
            });
            $(`.menu a:first`).addclass(`singo1`).end();
            $(`.singo1`).click(function () {
                $(`.main`).hide();
                $(`.sec3`).hide();
                $(`.sec1`).show();
                $(`.ganpyeon_bt`).addClass(`singo_sign`).end();
                $(`.ganpyeon_bt.singo_sign`).click(function () {

                    $(`.sec1`).hide();
                    $(`.sec3`).hide();
                    $(`.sec2`).show();
                    $(`.my_minwon`).hide();
                    $(`.logout`).show();


                    $(`.menu a:last`).click(function () {
                        $(`.menu a:first`).addClass(`singo2`).end();
                        $(`.singo2`).click(function () {
                            $(`.sec1`).hide();
                            $(`.sec2`).show();
                            $(`.sec3`).hide();
                            $(`.my_minwon`).hide();
                            $(`.logout`).show();

                            // -----카카오 맵-----
                            $(`#map`).show(function () {
                                var mapContainer = document.getElementById('map'),
                                    // 지도를 표시할 div 

                                    mapOption = {
                                        center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                                        level: 3 // 지도의 확대 레벨
                                    };

                                var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                                var positions = [{
                                        title: '가로등1',
                                        latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                                    },
                                    {
                                        title: '가로등2',
                                        latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                                    },
                                    {
                                        title: '가로등3',
                                        latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                                    },
                                    {
                                        title: '가로등4',
                                        latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                                    }
                                ];

                                // 마커 이미지의 이미지 주소입니다
                                var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                                for (var i = 0; i < positions.length; i++) {

                                    // 마커 이미지의 이미지 크기 입니다
                                    var imageSize = new kakao.maps.Size(24, 35);

                                    // 마커 이미지를 생성합니다    
                                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                                    // 마커를 생성합니다
                                    var marker = new kakao.maps.Marker({
                                        map: map, // 마커를 표시할 지도
                                        position: positions[i].latlng, // 마커를 표시할 위치
                                        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                                        image: markerImage // 마커 이미지 
                                    });
                                };
                                // -----카카오 맵-----

                                // ----- 지도 마커 클릭 이벤트-----
                                $(`img[title=가로등1`).click(function () {
                                    $(`.photo_box.n2`).hide();
                                    $(`.photo_box.n3`).hide();
                                    $(`.photo_box.n4`).hide();
                                    $(`.photo_box.n1`).show();
                                    $(`.photo_box.n1`).css('display', 'flex');
                                    $(`.garo0`).hide();
                                    $(`.garo2`).hide();
                                    $(`.garo3`).hide();
                                    $(`.garo4`).hide();
                                    $(`.garo1`).show();
                                });

                                $(`img[title=가로등2`).click(function () {
                                    $(`.photo_box.n1`).hide();
                                    $(`.photo_box.n3`).hide();
                                    $(`.photo_box.n4`).hide();
                                    $(`.photo_box.n2`).show();
                                    $(`.photo_box.n2`).css('display', 'flex');
                                    $(`.garo0`).hide();
                                    $(`.garo1`).hide();
                                    $(`.garo3`).hide();
                                    $(`.garo4`).hide();
                                    $(`.garo2`).show();
                                });

                                $(`img[title=가로등3`).click(function () {
                                    $(`.photo_box.n1`).hide();
                                    $(`.photo_box.n2`).hide();
                                    $(`.photo_box.n4`).hide();
                                    $(`.photo_box.n3`).show();
                                    $(`.photo_box.n3`).css('display', 'flex');
                                    $(`.garo0`).hide();
                                    $(`.garo1`).hide();
                                    $(`.garo2`).hide();
                                    $(`.garo4`).hide();
                                    $(`.garo3`).show();
                                });

                                $(`img[title=가로등4`).click(function () {
                                    $(`.photo_box.n1`).hide();
                                    $(`.photo_box.n2`).hide();
                                    $(`.photo_box.n3`).hide();
                                    $(`.photo_box.n4`).show();
                                    $(`.photo_box.n4`).css('display', 'flex');
                                    $(`.garo0`).hide();
                                    $(`.garo1`).hide();
                                    $(`.garo2`).hide();
                                    $(`.garo3`).hide();
                                    $(`.garo4`).show();
                                });
                                // ----- 지도 마커 클릭 이벤트-----
                            });
                        });



                    });
                    $(`.menu a:last`).addClass(`cheoli2`).end();
                    $(`.cheoli2`).click(function () {
                        $(`.sec1`).hide();
                        $(`.sec2`).hide();
                        $(`.sec3`).show();
                        $(`.my_list`).show();
                        $(`.my_minwon`).hide();
                        $(`.logout`).show();
                    });


                    // -----카카오 맵-----
                    $(`#map`).show(function () {
                        var mapContainer = document.getElementById('map'),
                            // 지도를 표시할 div 

                            mapOption = {
                                center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                                level: 3 // 지도의 확대 레벨
                            };

                        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                        var positions = [{
                                title: '가로등1',
                                latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                            },
                            {
                                title: '가로등2',
                                latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                            },
                            {
                                title: '가로등3',
                                latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                            },
                            {
                                title: '가로등4',
                                latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                            }
                        ];

                        // 마커 이미지의 이미지 주소입니다
                        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                        for (var i = 0; i < positions.length; i++) {

                            // 마커 이미지의 이미지 크기 입니다
                            var imageSize = new kakao.maps.Size(24, 35);

                            // 마커 이미지를 생성합니다    
                            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                            // 마커를 생성합니다
                            var marker = new kakao.maps.Marker({
                                map: map, // 마커를 표시할 지도
                                position: positions[i].latlng, // 마커를 표시할 위치
                                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                                image: markerImage // 마커 이미지 
                            });
                        };
                        // -----카카오 맵-----

                        // ----- 지도 마커 클릭 이벤트-----
                        $(`img[title=가로등1`).click(function () {
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n1`).show();
                            $(`.photo_box.n1`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo2`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).hide();
                            $(`.garo1`).show();
                        });

                        $(`img[title=가로등2`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n2`).show();
                            $(`.photo_box.n2`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).hide();
                            $(`.garo2`).show();
                        });

                        $(`img[title=가로등3`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n3`).show();
                            $(`.photo_box.n3`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo2`).hide();
                            $(`.garo4`).hide();
                            $(`.garo3`).show();
                        });

                        $(`img[title=가로등4`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).show();
                            $(`.photo_box.n4`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo2`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).show();
                        });
                        // ----- 지도 마커 클릭 이벤트-----
                    });
                });
            });
            });
        });
        $(`.ganpyeon_bt`).addClass(`singo_sign`).end();
        $(`.ganpyeon_bt.singo_sign`).click(function () {

            $(`.sec1`).hide();
            $(`.sec3`).hide();
            $(`.sec2`).show();
            $(`.my_minwon`).hide();
            $(`.logout`).show();
            $(`.menu a:last`).addClass(`cheoli2`).end();
            $(`.cheoli2`).click(function () {
                $(`.sec1`).hide();
                $(`.sec2`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
                $(`.my_minwon`).hide();
                $(`.logout`).show();
            });


            // -----카카오 맵-----
            $(`#map`).show(function () {
                var mapContainer = document.getElementById('map'),
                    // 지도를 표시할 div 

                    mapOption = {
                        center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                        level: 3 // 지도의 확대 레벨
                    };

                var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                var positions = [{
                        title: '가로등1',
                        latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                    },
                    {
                        title: '가로등2',
                        latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                    },
                    {
                        title: '가로등3',
                        latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                    },
                    {
                        title: '가로등4',
                        latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                    }
                ];

                // 마커 이미지의 이미지 주소입니다
                var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                for (var i = 0; i < positions.length; i++) {

                    // 마커 이미지의 이미지 크기 입니다
                    var imageSize = new kakao.maps.Size(24, 35);

                    // 마커 이미지를 생성합니다    
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: positions[i].latlng, // 마커를 표시할 위치
                        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        image: markerImage // 마커 이미지 
                    });
                };
                // -----카카오 맵-----

                // ----- 지도 마커 클릭 이벤트-----
                $(`img[title=가로등1`).click(function () {
                    $(`.photo_box.n2`).hide();
                    $(`.photo_box.n3`).hide();
                    $(`.photo_box.n4`).hide();
                    $(`.photo_box.n1`).show();
                    $(`.photo_box.n1`).css('display', 'flex');
                    $(`.garo0`).hide();
                    $(`.garo2`).hide();
                    $(`.garo3`).hide();
                    $(`.garo4`).hide();
                    $(`.garo1`).show();
                });

                $(`img[title=가로등2`).click(function () {
                    $(`.photo_box.n1`).hide();
                    $(`.photo_box.n3`).hide();
                    $(`.photo_box.n4`).hide();
                    $(`.photo_box.n2`).show();
                    $(`.photo_box.n2`).css('display', 'flex');
                    $(`.garo0`).hide();
                    $(`.garo1`).hide();
                    $(`.garo3`).hide();
                    $(`.garo4`).hide();
                    $(`.garo2`).show();
                });

                $(`img[title=가로등3`).click(function () {
                    $(`.photo_box.n1`).hide();
                    $(`.photo_box.n2`).hide();
                    $(`.photo_box.n4`).hide();
                    $(`.photo_box.n3`).show();
                    $(`.photo_box.n3`).css('display', 'flex');
                    $(`.garo0`).hide();
                    $(`.garo1`).hide();
                    $(`.garo2`).hide();
                    $(`.garo4`).hide();
                    $(`.garo3`).show();
                });

                $(`img[title=가로등4`).click(function () {
                    $(`.photo_box.n1`).hide();
                    $(`.photo_box.n2`).hide();
                    $(`.photo_box.n3`).hide();
                    $(`.photo_box.n4`).show();
                    $(`.photo_box.n4`).css('display', 'flex');
                    $(`.garo0`).hide();
                    $(`.garo1`).hide();
                    $(`.garo2`).hide();
                    $(`.garo3`).hide();
                    $(`.garo4`).show();
                });
                // ----- 지도 마커 클릭 이벤트-----
            });
        });
    });

        // -----고장신고-----



        // -----공통/ 로그아웃-----

    $(`.logout`).click(function () {
        $(`.sec1`).hide();
        $(`.sec2`).hide();
        $(`.sec3`).hide();
        $(`.main`).show();
        $(`.logout`).hide();
        $(`.my_minwon`).show();
        $(`.my_list`).hide();
        $(`.ganpyeon_bt`).removeClass(`singo_sign`);
        $(`.ganpyeon_bt`).removeClass(`cheoli_sign`);
        $(`.menu a:first`).removeClass(`singo2`);
        $(`.menu a:last`).removeClass(`cheoli2`);
        $(`.menu a:last`).removeClass(`cheoli1`);
        $(`.menu a:last`).click(function() {
            $(`.main`).hide();
            $(`.sec3`).show();
            $(`.my_list`).hide();
            $(`.sec1`).hide();
        });
        $(`.menu a:first`).click(function() {
            $(`.main`).hide();
            $(`.sec3`).hide();
            $(`sec2`).hide();
            $(`.sec1`).show();
            $(`.my_minwon`).show();
            $(`.logout`).hide();
            $(`.ganpyeon_bt`).addClass(`singo_sign`).end();
            $(`.ganpyeon_bt.singo_sign`).click(function () {
    
                $(`.sec1`).hide();
                $(`.sec3`).hide();
                $(`.sec2`).show();
                $(`.my_minwon`).hide();
                $(`.logout`).show();
    
    
                $(`.menu a:last`).click(function () {
                    $(`.menu a:first`).addClass(`singo2`).end();
                    $(`.singo2`).click(function () {
                        $(`.sec1`).hide();
                        $(`.sec2`).show();
                        $(`.sec3`).hide();
                        $(`.my_minwon`).hide();
                        $(`.logout`).show();
    
                        // -----카카오 맵-----
                        $(`#map`).show(function () {
                            var mapContainer = document.getElementById('map'),
                                // 지도를 표시할 div 
    
                                mapOption = {
                                    center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                                    level: 3 // 지도의 확대 레벨
                                };
    
                            var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    
                            var positions = [{
                                    title: '가로등1',
                                    latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                                },
                                {
                                    title: '가로등2',
                                    latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                                },
                                {
                                    title: '가로등3',
                                    latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                                },
                                {
                                    title: '가로등4',
                                    latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                                }
                            ];
    
                            // 마커 이미지의 이미지 주소입니다
                            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    
                            for (var i = 0; i < positions.length; i++) {
    
                                // 마커 이미지의 이미지 크기 입니다
                                var imageSize = new kakao.maps.Size(24, 35);
    
                                // 마커 이미지를 생성합니다    
                                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    
                                // 마커를 생성합니다
                                var marker = new kakao.maps.Marker({
                                    map: map, // 마커를 표시할 지도
                                    position: positions[i].latlng, // 마커를 표시할 위치
                                    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                                    image: markerImage // 마커 이미지 
                                });
                            };
                            // -----카카오 맵-----
    
                            // ----- 지도 마커 클릭 이벤트-----
                            $(`img[title=가로등1`).click(function () {
                                $(`.photo_box.n2`).hide();
                                $(`.photo_box.n3`).hide();
                                $(`.photo_box.n4`).hide();
                                $(`.photo_box.n1`).show();
                                $(`.photo_box.n1`).css('display', 'flex');
                                $(`.garo0`).hide();
                                $(`.garo2`).hide();
                                $(`.garo3`).hide();
                                $(`.garo4`).hide();
                                $(`.garo1`).show();
                            });
    
                            $(`img[title=가로등2`).click(function () {
                                $(`.photo_box.n1`).hide();
                                $(`.photo_box.n3`).hide();
                                $(`.photo_box.n4`).hide();
                                $(`.photo_box.n2`).show();
                                $(`.photo_box.n2`).css('display', 'flex');
                                $(`.garo0`).hide();
                                $(`.garo1`).hide();
                                $(`.garo3`).hide();
                                $(`.garo4`).hide();
                                $(`.garo2`).show();
                            });
    
                            $(`img[title=가로등3`).click(function () {
                                $(`.photo_box.n1`).hide();
                                $(`.photo_box.n2`).hide();
                                $(`.photo_box.n4`).hide();
                                $(`.photo_box.n3`).show();
                                $(`.photo_box.n3`).css('display', 'flex');
                                $(`.garo0`).hide();
                                $(`.garo1`).hide();
                                $(`.garo2`).hide();
                                $(`.garo4`).hide();
                                $(`.garo3`).show();
                            });
    
                            $(`img[title=가로등4`).click(function () {
                                $(`.photo_box.n1`).hide();
                                $(`.photo_box.n2`).hide();
                                $(`.photo_box.n3`).hide();
                                $(`.photo_box.n4`).show();
                                $(`.photo_box.n4`).css('display', 'flex');
                                $(`.garo0`).hide();
                                $(`.garo1`).hide();
                                $(`.garo2`).hide();
                                $(`.garo3`).hide();
                                $(`.garo4`).show();
                            });
                            // ----- 지도 마커 클릭 이벤트-----
                        });
                    });
                });
                $(`.menu a:last`).addClass(`cheoli2`).end();
                $(`.cheoli2`).click(function () {
                    $(`.sec1`).hide();
                    $(`.sec2`).hide();
                    $(`.sec3`).show();
                    $(`.my_list`).show();
                    $(`.my_minwon`).hide();
                    $(`.logout`).show();
                });
    
    
                // -----카카오 맵-----
                $(`#map`).show(function () {
                    var mapContainer = document.getElementById('map'),
                        // 지도를 표시할 div 
    
                        mapOption = {
                            center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                            level: 3 // 지도의 확대 레벨
                        };
    
                    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    
                    var positions = [{
                            title: '가로등1',
                            latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                        },
                        {
                            title: '가로등2',
                            latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                        },
                        {
                            title: '가로등3',
                            latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                        },
                        {
                            title: '가로등4',
                            latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                        }
                    ];
    
                    // 마커 이미지의 이미지 주소입니다
                    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    
                    for (var i = 0; i < positions.length; i++) {
    
                        // 마커 이미지의 이미지 크기 입니다
                        var imageSize = new kakao.maps.Size(24, 35);
    
                        // 마커 이미지를 생성합니다    
                        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
    
                        // 마커를 생성합니다
                        var marker = new kakao.maps.Marker({
                            map: map, // 마커를 표시할 지도
                            position: positions[i].latlng, // 마커를 표시할 위치
                            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                            image: markerImage // 마커 이미지 
                        });
                    };
                    // -----카카오 맵-----
    
                    // ----- 지도 마커 클릭 이벤트-----
                    $(`img[title=가로등1`).click(function () {
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n1`).show();
                        $(`.photo_box.n1`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo2`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).hide();
                        $(`.garo1`).show();
                    });
    
                    $(`img[title=가로등2`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n2`).show();
                        $(`.photo_box.n2`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).hide();
                        $(`.garo2`).show();
                    });
    
                    $(`img[title=가로등3`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n3`).show();
                        $(`.photo_box.n3`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo2`).hide();
                        $(`.garo4`).hide();
                        $(`.garo3`).show();
                    });
    
                    $(`img[title=가로등4`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).show();
                        $(`.photo_box.n4`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo2`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).show();
                    });
                    // ----- 지도 마커 클릭 이벤트-----
                });
            });
        });
    });

    $(`.my_minwon`).click(function() {
        $(`.main`).hide();
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).hide();
            $(`.menu a:first`).click(function() {
                $(`.main`).hide();
                $(`.sec3`).hide();
                $(`.sec1`).show();
                $(`.my_minwon`).show();
                $(`.logout`).hide();
            });
            $(`.menu a:last`).click(function() {
                $(`.main`).hide();
                $(`sec2`).hide();
                $(`sec3`).show();
                $(`.my_list`).hide();
            });
    });

        // -----공통/ 로그아웃-----


        // -----처리현황-----
        $(`.menu a:last`).click(function () {
            $(`.main`).hide();
            $(`.sec3`).show();
            $(`.my_list`).hide();
            $(`.sec1`).hide();
            
        });

        $(`.main .right_bt`).click(function () {
            $(`.main`).hide();
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).hide();
            $(`.menu a:first`).click(function() {
                $(`.main`).hide();
                $(`.sec3`).hide();
                $(`.sec1`).show();
                $(`.my_minwon`).show();
                $(`.logout`).hide();
            });
            $(`.menu a:last`).click(function() {
                $(`.main`).hide();
                $(`sec2`).hide();
                $(`sec3`).show();
                $(`.my_list`).hide();
            });
        });

        $(`.my_minwon`).click(function () {
            $(`.sec2`).hide();
            $(`.sec3`).hide();
            $(`.sec1`).show();
            $(`.my_list`).hide();
            $(`.menu a:last`).addClass(`cheoli1`).end();
            $(`.cheoli1`).click(function () {
                $(`.main`).hide();
                $(`.sec2`).hide();
                $(`.sec3`).show();
                $(`.my_list`).show();
                $(`.sec1`).hide();
            });
            $(`.menu a:first`).addclass(`singo1`).end();
            $(`.singo1`).click(function () {
                $(`.main`).hide();
                $(`.sec3`).hide();
                $(`.sec1`).show();
                $(`.ganpyeon_bt`).addClass(`singo_sign`).end();
                $(`.ganpyeon_bt.singo_sign`).click(function () {

                    $(`.sec1`).hide();
                    $(`.sec3`).hide();
                    $(`.sec2`).show();
                    $(`.my_minwon`).hide();
                    $(`.logout`).show();


                    $(`.menu a:last`).click(function () {
                        $(`.menu a:first`).addClass(`singo2`).end();
                        $(`.singo2`).click(function () {
                            $(`.sec1`).hide();
                            $(`.sec2`).show();
                            $(`.sec3`).hide();
                            $(`.my_minwon`).hide();
                            $(`.logout`).show();

                            // -----카카오 맵-----
                            $(`#map`).show(function () {
                                var mapContainer = document.getElementById('map'),
                                    // 지도를 표시할 div 

                                    mapOption = {
                                        center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                                        level: 3 // 지도의 확대 레벨
                                    };

                                var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                                var positions = [{
                                        title: '가로등1',
                                        latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                                    },
                                    {
                                        title: '가로등2',
                                        latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                                    },
                                    {
                                        title: '가로등3',
                                        latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                                    },
                                    {
                                        title: '가로등4',
                                        latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                                    }
                                ];

                                // 마커 이미지의 이미지 주소입니다
                                var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                                for (var i = 0; i < positions.length; i++) {

                                    // 마커 이미지의 이미지 크기 입니다
                                    var imageSize = new kakao.maps.Size(24, 35);

                                    // 마커 이미지를 생성합니다    
                                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                                    // 마커를 생성합니다
                                    var marker = new kakao.maps.Marker({
                                        map: map, // 마커를 표시할 지도
                                        position: positions[i].latlng, // 마커를 표시할 위치
                                        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                                        image: markerImage // 마커 이미지 
                                    });
                                };
                                // -----카카오 맵-----

                                // ----- 지도 마커 클릭 이벤트-----
                                $(`img[title=가로등1`).click(function () {
                                    $(`.photo_box.n2`).hide();
                                    $(`.photo_box.n3`).hide();
                                    $(`.photo_box.n4`).hide();
                                    $(`.photo_box.n1`).show();
                                    $(`.photo_box.n1`).css('display', 'flex');
                                    $(`.garo0`).hide();
                                    $(`.garo2`).hide();
                                    $(`.garo3`).hide();
                                    $(`.garo4`).hide();
                                    $(`.garo1`).show();
                                });

                                $(`img[title=가로등2`).click(function () {
                                    $(`.photo_box.n1`).hide();
                                    $(`.photo_box.n3`).hide();
                                    $(`.photo_box.n4`).hide();
                                    $(`.photo_box.n2`).show();
                                    $(`.photo_box.n2`).css('display', 'flex');
                                    $(`.garo0`).hide();
                                    $(`.garo1`).hide();
                                    $(`.garo3`).hide();
                                    $(`.garo4`).hide();
                                    $(`.garo2`).show();
                                });

                                $(`img[title=가로등3`).click(function () {
                                    $(`.photo_box.n1`).hide();
                                    $(`.photo_box.n2`).hide();
                                    $(`.photo_box.n4`).hide();
                                    $(`.photo_box.n3`).show();
                                    $(`.photo_box.n3`).css('display', 'flex');
                                    $(`.garo0`).hide();
                                    $(`.garo1`).hide();
                                    $(`.garo2`).hide();
                                    $(`.garo4`).hide();
                                    $(`.garo3`).show();
                                });

                                $(`img[title=가로등4`).click(function () {
                                    $(`.photo_box.n1`).hide();
                                    $(`.photo_box.n2`).hide();
                                    $(`.photo_box.n3`).hide();
                                    $(`.photo_box.n4`).show();
                                    $(`.photo_box.n4`).css('display', 'flex');
                                    $(`.garo0`).hide();
                                    $(`.garo1`).hide();
                                    $(`.garo2`).hide();
                                    $(`.garo3`).hide();
                                    $(`.garo4`).show();
                                });
                                // ----- 지도 마커 클릭 이벤트-----
                            });
                        });



                    });
                    $(`.menu a:last`).addClass(`cheoli2`).end();
                    $(`.cheoli2`).click(function () {
                        $(`.sec1`).hide();
                        $(`.sec2`).hide();
                        $(`.sec3`).show();
                        $(`.my_list`).show();
                        $(`.my_minwon`).hide();
                        $(`.logout`).show();
                    });


                    // -----카카오 맵-----
                    $(`#map`).show(function () {
                        var mapContainer = document.getElementById('map'),
                            // 지도를 표시할 div 

                            mapOption = {
                                center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                                level: 3 // 지도의 확대 레벨
                            };

                        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                        var positions = [{
                                title: '가로등1',
                                latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                            },
                            {
                                title: '가로등2',
                                latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                            },
                            {
                                title: '가로등3',
                                latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                            },
                            {
                                title: '가로등4',
                                latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                            }
                        ];

                        // 마커 이미지의 이미지 주소입니다
                        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                        for (var i = 0; i < positions.length; i++) {

                            // 마커 이미지의 이미지 크기 입니다
                            var imageSize = new kakao.maps.Size(24, 35);

                            // 마커 이미지를 생성합니다    
                            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                            // 마커를 생성합니다
                            var marker = new kakao.maps.Marker({
                                map: map, // 마커를 표시할 지도
                                position: positions[i].latlng, // 마커를 표시할 위치
                                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                                image: markerImage // 마커 이미지 
                            });
                        };
                        // -----카카오 맵-----

                        // ----- 지도 마커 클릭 이벤트-----
                        $(`img[title=가로등1`).click(function () {
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n1`).show();
                            $(`.photo_box.n1`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo2`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).hide();
                            $(`.garo1`).show();
                        });

                        $(`img[title=가로등2`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n2`).show();
                            $(`.photo_box.n2`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).hide();
                            $(`.garo2`).show();
                        });

                        $(`img[title=가로등3`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n4`).hide();
                            $(`.photo_box.n3`).show();
                            $(`.photo_box.n3`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo2`).hide();
                            $(`.garo4`).hide();
                            $(`.garo3`).show();
                        });

                        $(`img[title=가로등4`).click(function () {
                            $(`.photo_box.n1`).hide();
                            $(`.photo_box.n2`).hide();
                            $(`.photo_box.n3`).hide();
                            $(`.photo_box.n4`).show();
                            $(`.photo_box.n4`).css('display', 'flex');
                            $(`.garo0`).hide();
                            $(`.garo1`).hide();
                            $(`.garo2`).hide();
                            $(`.garo3`).hide();
                            $(`.garo4`).show();
                        });
                        // ----- 지도 마커 클릭 이벤트-----
                    });
                });
            });
        });
        $(`.ganpyeon_bt`).addClass(`cheoli_sign`).end();
        $(`.ganpyeon_bt.cheoli_sign`).click(function () {

            $(`.sec1`).hide();
            $(`.sec2`).hide();
            $(`.sec3`).show();
            $(`.my_list`).show();
            $(`.my_minwon`).hide();
            $(`.logout`).show();
            $(`.menu a:first`).addClass(`singo2`).end();
            $(`.singo2`).click(function () {
                $(`.sec1`).hide();
                $(`.sec2`).show();
                $(`.sec3`).hide();
                $(`.my_minwon`).hide();
                $(`.logout`).show();
                // -----카카오 맵-----
                $(`#map`).show(function () {
                    var mapContainer = document.getElementById('map'),
                        // 지도를 표시할 div 

                        mapOption = {
                            center: new kakao.maps.LatLng(36.46850856550445, 127.26871227961624), // 지도의 중심좌표
                            level: 3 // 지도의 확대 레벨
                        };

                    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


                    var positions = [{
                            title: '가로등1',
                            latlng: new kakao.maps.LatLng(36.46994680, 127.2691494)
                        },
                        {
                            title: '가로등2',
                            latlng: new kakao.maps.LatLng(36.46948720, 127.2689554)
                        },
                        {
                            title: '가로등3',
                            latlng: new kakao.maps.LatLng(36.46773580, 127.2678234)
                        },
                        {
                            title: '가로등4',
                            latlng: new kakao.maps.LatLng(36.47088880, 127.2698948)
                        }
                    ];

                    // 마커 이미지의 이미지 주소입니다
                    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

                    for (var i = 0; i < positions.length; i++) {

                        // 마커 이미지의 이미지 크기 입니다
                        var imageSize = new kakao.maps.Size(24, 35);

                        // 마커 이미지를 생성합니다    
                        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

                        // 마커를 생성합니다
                        var marker = new kakao.maps.Marker({
                            map: map, // 마커를 표시할 지도
                            position: positions[i].latlng, // 마커를 표시할 위치
                            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                            image: markerImage // 마커 이미지 
                        });
                    };
                    // -----카카오 맵-----

                    // ----- 지도 마커 클릭 이벤트-----
                    $(`img[title=가로등1`).click(function () {
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n1`).show();
                        $(`.photo_box.n1`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo2`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).hide();
                        $(`.garo1`).show();
                    });

                    $(`img[title=가로등2`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n2`).show();
                        $(`.photo_box.n2`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).hide();
                        $(`.garo2`).show();
                    });

                    $(`img[title=가로등3`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n4`).hide();
                        $(`.photo_box.n3`).show();
                        $(`.photo_box.n3`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo2`).hide();
                        $(`.garo4`).hide();
                        $(`.garo3`).show();
                    });

                    $(`img[title=가로등4`).click(function () {
                        $(`.photo_box.n1`).hide();
                        $(`.photo_box.n2`).hide();
                        $(`.photo_box.n3`).hide();
                        $(`.photo_box.n4`).show();
                        $(`.photo_box.n4`).css('display', 'flex');
                        $(`.garo0`).hide();
                        $(`.garo1`).hide();
                        $(`.garo2`).hide();
                        $(`.garo3`).hide();
                        $(`.garo4`).show();
                    });
                    // ----- 지도 마커 클릭 이벤트-----
                });
            });
        });
    

    console.log($(`.ganpyeon_bt`))

    $(`.ganpyeon_bt`).click(function () {
        console.log($(`.ganpyeon_bt.cheoli_sign`).innerHTML);
    });


    // -----처리현황-----





    // -----처리현황 페이징 버튼-----

    $('.pgnum:first-child').addClass('on');

    $('.pgnum').click(function () {
        $('.pgnum').addClass('on')
            .siblings().removeClass('on').end();
    });

    $(`.pgnum`).click(function () {
        $(this).addClass(`on`);
    });

    // -----처리현황 페이징 버튼-----            
});