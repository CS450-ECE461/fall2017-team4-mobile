import Controller from '@ember/controller';
import Ember from 'ember';


export default Controller.extend({
  actions:{
    showRecommendedJobSlider: function(){

      Ember.$( "#recommended-jobs-body" ).slideToggle( "fast");

      if(Ember.$("#recommended-jobs-body").hasClass('hide')){
          Ember.$('#recommended-jobs-header').animate({bottom: '10%'}, 'fast');
          Ember.$("#recommended-jobs-body").removeClass('hide').addClass('show');
          Ember.$("#recommended-jobs-title").text("Our Top Picks for You. ");
          Ember.$("#recommended-jobs-open-close").attr("src", "https://s3-us-west-1.amazonaws.com/waldojobs-dev/app-assets/icons/ctaUp.png");
          Ember.$("#div-white-bar").css("height","100%");
      }
      else {
          Ember.$('#recommended-jobs-header').animate({bottom: '95%'}, 'fast');
          Ember.$("#recommended-jobs-body").removeClass('show').addClass('hide');
          Ember.$("#recommended-jobs-title").text("Not So Lucky?");
          Ember.$("#recommended-jobs-open-close").attr("src", "https://s3-us-west-1.amazonaws.com/waldojobs-dev/app-assets/icons/ctaDown.png");
          Ember.$("#div-white-bar").css("height","20%");
      }

    }
  },
});
