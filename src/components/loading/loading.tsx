import React from "react";
import {CircularProgress} from '@material-ui/core'
interface Props {
    loading: boolean;
}

const Loading: React.FC<Props> = (props) => {
    return props.loading ? <div data-testid={'loadingC'} className="h-40 w-full flex-center">
        <CircularProgress/>
    </div> : null;
};
export default Loading;
