import { Injectable } from "@angular/core";
import { WindowPostMessageService } from "./window-post-message.service";

/**
 * 应用加载完成事件服务，发送通知给javascript。
 */
@Injectable({
	providedIn: "root"
})
export class AppReadyEventService {

	private hasBeenTriggered: boolean;

	constructor(private messageService: WindowPostMessageService  ) {

		this.hasBeenTriggered = false;

	}

	trigger() : void {

		if ( this.hasBeenTriggered ) {

			return;

		}

		this.hasBeenTriggered = true;
		this.messageService.send( "appReady" );

	}

}