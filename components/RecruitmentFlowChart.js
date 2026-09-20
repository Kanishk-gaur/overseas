const NAVY = "#0b2545";
const NAVY_DARK = "#071a33";
const GOLD = "#c8952c";
const GOLD_TEXT = "#1a1200";
const ROSE = "#c2255c";
const WHITE = "#ffffff";

function FBox({ x, y, w, h, fill, color = WHITE, muted = false, children }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill={fill} fillOpacity={muted ? 0.6 : 1} />
      <foreignObject x={x} y={y} width={w} height={h}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ color }}
          className="flex h-full w-full items-center justify-center px-3 text-center text-[13px] font-semibold leading-tight"
        >
          {children}
        </div>
      </foreignObject>
    </g>
  );
}

function FDiamond({ cx, cy, hw, hh, fill, color = WHITE, children }) {
  const points = `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`;
  const fw = hw * 1.5;
  const fh = hh * 1.3;
  return (
    <g>
      <polygon points={points} fill={fill} />
      <foreignObject x={cx - fw / 2} y={cy - fh / 2} width={fw} height={fh}>
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{ color }}
          className="flex h-full w-full items-center justify-center px-2 text-center text-[12.5px] font-semibold leading-tight"
        >
          {children}
        </div>
      </foreignObject>
    </g>
  );
}

function FArrow({ points }) {
  return (
    <polyline points={points} fill="none" stroke={NAVY} strokeWidth="2.5" markerEnd="url(#flow-arrowhead)" />
  );
}

function FLabel({ x, y, children }) {
  return (
    <text x={x} y={y} fill={NAVY} fontSize="13" fontWeight="700" textAnchor="middle">
      {children}
    </text>
  );
}

const CENTER = 500;
const LEFT = 330;
const RIGHT = 670;

export default function RecruitmentFlowChart() {
  return (
    <section className="section-y bg-muted">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-navy md:text-3xl">Recruitment Flow</h2>
          <p className="mt-2 text-gray-600">
            How a job order moves from your requirement to on-site deployment.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto">
          <div className="min-w-[760px]">
            <svg viewBox="0 0 1000 1390" className="w-full h-auto">
              <defs>
                <marker
                  id="flow-arrowhead"
                  markerWidth="9"
                  markerHeight="9"
                  refX="7"
                  refY="4.5"
                  orient="auto"
                >
                  <path d="M0,0 L9,4.5 L0,9 Z" fill={NAVY} />
                </marker>
              </defs>

              {/* connectors */}
              <FArrow points={`${CENTER},90 ${CENTER},120 ${LEFT},120 ${LEFT},150`} />
              <FArrow points={`${CENTER},90 ${CENTER},120 ${RIGHT},120 ${RIGHT},150`} />
              <FArrow points={`${LEFT},240 ${LEFT},270`} />
              <FArrow points={`${RIGHT},240 ${RIGHT},270`} />
              <FArrow points={`${LEFT},360 ${LEFT},385 480,385 480,410`} />
              <FArrow points={`${RIGHT},360 ${RIGHT},385 520,385 520,410`} />
              <FArrow points={`${CENTER},480 ${CENTER},510`} />
              <FArrow points={`${CENTER},580 ${CENTER},610`} />
              <FArrow points={`${CENTER},680 ${CENTER},710`} />
              <FArrow points={`${RIGHT},790 710,790`} />
              <FArrow points={`${CENTER},870 ${CENTER},900`} />
              <FArrow points={`${CENTER},970 ${CENTER},1000`} />
              <FArrow points={`${CENTER},1070 ${CENTER},1100`} />
              <FArrow points={`${CENTER},1170 ${CENTER},1200`} />
              <FArrow points={`${CENTER},1270 ${CENTER},1300`} />
              <FLabel x={690} y={775}>No</FLabel>
              <FLabel x={522} y={888}>Yes</FLabel>

              {/* stages */}
              <FBox x={CENTER - 190} y={20} w={380} h={70} fill={NAVY}>
                Submit Your Workforce Requirement
              </FBox>

              <FBox x={LEFT - 150} y={150} w={300} h={90} fill={NAVY}>
                Search Technical Talent Pool
              </FBox>
              <FBox x={RIGHT - 150} y={150} w={300} h={90} fill={NAVY}>
                Search Non-Technical Talent Pool
              </FBox>

              <FBox x={LEFT - 150} y={270} w={300} h={90} fill={NAVY}>
                Credential & Portfolio Review
              </FBox>
              <FBox x={RIGHT - 150} y={270} w={300} h={90} fill={NAVY}>
                Trade Certificate & Experience Check
              </FBox>

              <FBox x={CENTER - 190} y={410} w={380} h={70} fill={NAVY_DARK}>
                Screening by Recruitment Desk
              </FBox>

              <FBox x={CENTER - 190} y={510} w={380} h={70} fill={GOLD} color={GOLD_TEXT}>
                Shortlist Sent to Client for Review
              </FBox>
              <FBox x={CENTER - 190} y={610} w={380} h={70} fill={GOLD} color={GOLD_TEXT}>
                Candidate Registration & Documentation
              </FBox>

              <FDiamond cx={CENTER} cy={790} hw={170} hh={80} fill={ROSE}>
                Skill Test & Client Interview
              </FDiamond>

              <FBox x={710} y={755} w={260} h={70} fill={NAVY} muted>
                Return to Talent Pool
              </FBox>

              <FBox x={CENTER - 190} y={900} w={380} h={70} fill={NAVY}>
                Medical Fitness & Police Clearance
              </FBox>
              <FBox x={CENTER - 190} y={1000} w={380} h={70} fill={NAVY}>
                Visa Sponsorship & Work Permit Processing
              </FBox>
              <FBox x={CENTER - 190} y={1100} w={380} h={70} fill={NAVY}>
                Pre-Deployment Training & Orientation
              </FBox>
              <FBox x={CENTER - 190} y={1200} w={380} h={70} fill={GOLD} color={GOLD_TEXT}>
                Deployment & On-Site Handover
              </FBox>
              <FBox x={CENTER - 190} y={1300} w={380} h={70} fill={NAVY_DARK}>
                Ongoing Account Support
              </FBox>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
