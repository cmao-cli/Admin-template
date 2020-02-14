import * as React from 'react';
import { connect } from 'react-redux';
import { putDemo } from 'src/redux/demo/index';
import { RootState } from 'src/redux/root-reducer';
import { bindActionCreators } from 'redux';

export interface IDemoProps extends ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps> {
}

export function Demo(props:IDemoProps) {
  const { num, putDemo } = props;
  const handleAdd = () => {
    putDemo({ num: num + 1 });
  };
  return (
    <div>
      {num}
      <button onClick={handleAdd}>+</button>
    </div>
  );
}
const mapStateToProps = (state:RootState) => ({
  num: state.demo.num,
});
const mapDispatchToProps = (dispatch:any) => bindActionCreators({
  putDemo: putDemo,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
