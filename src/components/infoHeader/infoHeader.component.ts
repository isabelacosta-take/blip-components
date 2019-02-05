export class InfoHeaderComponent {
    showInfo: boolean;
    constructor() {}

    toggleInfo(event) {
        event.stopPropagation();
        this.showInfo = !this.showInfo;
    }
}

export const InfoHeader = {
    controller: InfoHeaderComponent,
    transclude: {
        header: '?header',
        info: '?info',
        extra: '?extra'
    },
    bindings: {
        showInfo: '<?',
        headerClass: '@?',
        infoClass: '@?',
        extraClass: '@?',
    },
    template: `<div class="flex flex-column">
        <span class="flex flex-row items-center justify-between">
            <span class="flex flex-row w-100 items-center">
                <span class="lh-solid" ng-class="$ctrl.headerClass" ng-transclude="header"></span>
                <i ng-click="$ctrl.toggleInfo($event)" class="ml2 icon icon-info bp-c-silver"></i>
            </span>
            <span ng-class="$ctrl.extraClass" ng-transclude="extra"></span>
        </span>
        <span ng-class="$ctrl.infoClass" ng-show="$ctrl.showInfo" ng-transclude="info"></span>
    </div>`,
};