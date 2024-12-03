import type { Config } from "@markdoc/markdoc";
import React from "react";
import InlineCode from "@/components/markdoc/inline-code";
import CodeBlock from "@/components/markdoc/code-block";
import TabbedUseCaseCodeBlock from "@/components/markdoc/tabbed-use-case-code-block";
import Tab, { Tabs } from "@/components/markdoc/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/markdoc/table";
import TabbedCodeBlock from "@/components/markdoc/tabbed-code-block";
import CenteredContent from "@/components/markdoc/centered-content";
import Latex from "@/components/markdoc/latex";
import Banner from "@/components/markdoc/banner";
import MarkdocImage from "@/components/markdoc/markdoc-image";
import Heading from "@/components/markdoc/heading";

interface MarkDocConfig extends Config {
  components?: Record<string, React.FC<any>>;
}

const markdocConfig: MarkDocConfig = {
  nodes: {
    code: {
      render: "InlineCode",
      attributes: {
        content: { type: String },
      },
    },
    fence: {
      render: "CodeBlock",
      attributes: {
        content: { type: String },
        language: { type: String },
      },
    },
    table: {
      render: "Table",
    },
    thead: {
      render: "TableHeader",
    },
    tbody: {
      render: "TableBody",
    },
    tr: {
      render: "TableRow",
    },
    th: {
      render: "TableHead",
    },
    td: {
      render: "TableCell",
    },
    image: {
      render: "MarkdocImage",
      attributes: {
        src: { type: String },
        alt: { type: String },
      },
    },
    heading: {
      render: "Heading",
      attributes: {
        level: { type: "Number", required: true },
        id: { type: "String", required: false },
      },
    },
  },
  tags: {
    TabbedCodeBlock: {
      render: "TabbedCodeBlock",
      selfClosing: true,
    },
    TabbedUseCaseCodeBlock: {
      render: "TabbedUseCaseCodeBlock",
      selfClosing: false,
      attributes: {
        language: {
          type: String,
          required: true,
        },
      },
    },
    Tab: {
      render: "Tab",
      selfClosing: false,
      attributes: {
        label: {
          type: String,
          required: true,
        },
      },
    },
    Tabs: {
      render: "Tabs",
      selfClosing: false,
    },
    CenteredContent: {
      render: "CenteredContent",
      selfClosing: false,
    },
    Banner: {
      render: "Banner",
      attributes: {
        type: {
          type: String,
          required: true,
        },
      },
      selfClosing: false,
    },
    Latex: {
      render: "Latex",
      selfClosing: false,
    },
  },
  components: {
    InlineCode,
    CodeBlock,
    TabbedCodeBlock,
    TabbedUseCaseCodeBlock,
    Tab,
    Tabs,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    CenteredContent,
    Banner,
    Latex,
    MarkdocImage,
    Heading,
  },
};

export default markdocConfig;
