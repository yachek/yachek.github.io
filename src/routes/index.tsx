import { useRoutes } from "react-router-dom";

import LoginRoutes from "./LoginRoutes";
import {AccountRoutes} from "./AccountRoutes";

export default function Routes() {
    return useRoutes([LoginRoutes, AccountRoutes]);
}
