import { Trans } from "@lingui/react"

;<span id="ignore" />
;<Trans /> // this should be ignored
;<Trans message="Missing ID" /> // this should be ignored
;<Trans id={"msg.hello"} comment="Description" />
;<Trans id="msg.default" message="Hello World" />
;<Trans id="msg.default" message="Hello World" />
;<Trans id="Hi, my name is <0>{name}</0>" values={{ count }} />
;<Trans id={message} />