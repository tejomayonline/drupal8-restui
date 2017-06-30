
var tok = 'admin' + ':' + 'admin',
    base_url='http://172.17.0.2/groupzing_d8/web',
    post_url=base_url+'/entity/node',
    patch_url = base_url+'/node/',
    content_type='application/hal+json',
authority = 'Basic ' + btoa(tok),
target_type = 'article';

function getCsrfToken(callback) {
    $.get(base_url+'/rest/session/token')
        .done(function (data) {
            var csrfToken = data;
            callback(csrfToken);
        });
}

function restNode(csrfToken, node,requestType,url) {
    $.ajax({
        url: url,
        method: requestType,
        headers: {
            'Content-type': content_type,
            'X-CSRF-Token': csrfToken,
            'Authorization': authority
        },
        data: JSON.stringify(node),
        success: function (node) {

        }
    });
}

var newNode = {
    _links: {
        type: {
            href: base_url+'/rest/type/node/'+target_type
        }
    },

    title: {
        value: 'learning-man'
    }
};

getCsrfToken(function (csrfToken) {
    /*  var post_url= base_url+'/entity/node';
     restNode(csrfToken, newNode,'POST',post_url);
     //  var patch_url =base_url+'/node/'+'41';*/
    //       restNode(csrfToken, newNode,'PATCH',patch_url);
    //restNode(csrfToken, newNode,'DELETE');
    //  restNode(csrfToken,newNode,'DELETE',patch_url_without_arg+'42');
});
