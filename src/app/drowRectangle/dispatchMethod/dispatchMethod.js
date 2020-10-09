import drowXLPipe_mechanical from "../drowXLPipe/XLPipe_mechanical/drowXLPipe_mechanical";
import drowXLPipe_manual_system from "../drowXLPipe/XLPipe_manual_system/drowXLPipe_manual_system";
import drowXLPipe_manual_system_step from "../drowXLPipe/XLPipe_manual_system_step/drowXLPipe_manual_system_step"


let dispatchMethod = (inst, ctx, dasL, dasR, dasT, dasB) => {

    switch (inst.drowMethod) {
        case "mechanical":
            drowXLPipe_mechanical(inst, ctx, dasL, dasR, dasT, dasB); //Работает 
            break
        case "manual_system":
            drowXLPipe_manual_system(inst, ctx, dasL, dasR, dasT, dasB);
            break
        case "manual_step":
            break
        case "manual_system_step":
            drowXLPipe_manual_system_step(inst, ctx, dasL, dasR, dasT, dasB);
            break
    }
}


export default dispatchMethod;