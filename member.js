function skillMember() {
    return {
        restrict: 'E',
        templateUrl: 'templates/skill-member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
           member: 'm'
        }
    };
}