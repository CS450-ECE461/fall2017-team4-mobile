import Controller from '@ember/controller';
import Ember from 'ember';


export default Controller.extend({
  actions:{
    showRecommendedJobSlider: function(){

      Ember.$( "#recommended-jobs-body" ).slideToggle( "medium");

      if(Ember.$("#recommended-jobs-body").hasClass('hide')){
          Ember.$('#recommended-jobs-header').animate({bottom: '50px'}, 'medium');
          Ember.$("#recommended-jobs-body").removeClass('hide').addClass('show');
          Ember.$("#recommended-jobs-title").text("Our Top Picks for You. ");
      }
      else {
          Ember.$('#recommended-jobs-header').animate({bottom: '525px'}, 'medium');
          Ember.$("#recommended-jobs-body").removeClass('show').addClass('hide');
          Ember.$("#recommended-jobs-title").text("Not So Lucky?");
      }

    }
  },
});
