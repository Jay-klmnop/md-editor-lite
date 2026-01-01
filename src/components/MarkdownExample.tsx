import "../css/editor.css";

export function MarkdownExample() {
  return (
    <div className="md-example-container">
      <p className="md-example-text">마크다운 문법을 사용할 수 있습니다.</p>
      <div className="md-examples">
        <div className="md-example-row">
          <span>**굵게**</span>
          <span>*기울임*</span>
          <span>`코드`</span>
          <span>[링크](URL)</span>
        </div>
        <div className="md-example-row">
          <span>## 제목</span>
          <span>- 목록</span>
          <span>![설명](이미지URL)</span>
        </div>
      </div>
    </div>
  );
}
