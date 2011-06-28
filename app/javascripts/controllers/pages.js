Teambox.Controllers.PagesController = Teambox.Controllers.BaseController.extend({
  routes: {
    '/projects/:project/pages'             : 'pages_index',
    '/projects/:project/pages/:id'         : 'pages_show'
  },

  pages_new: function() {
    $('content').update( 'new page' );
  },

  pages_show: function() {
    $('content').update( 'show page' );
  }
});