# 表格

在表格元素上添加 `j-table` 类名，构建一个基础的表格样式。

## 示例

<table class="j-table">
<thead>
<tr>
<th>编号</th>
<th>项目名称</th>
<th>状态</th>
<th>描述</th>
<th>负责人</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>星际快递系统</td>
<td><strong>进行中</strong></td>
<td>开发一套支持<strong>跨星系物流追踪</strong>的平台。详情见<a>项目文档</a>。</td>
<td>艾伦·吴</td>
</tr>
<tr>
<td>2</td>
<td>猫咪情绪识别 App</td>
<td>已完成</td>
<td>通过AI分析猫脸表情判断心情。用户反馈：<em>“终于知道主子为什么生气了！”</em> 源码托管在<a>GitHub</a>。</td>
<td>林小喵</td>
</tr>
<tr class="is-selected">
<td>3</td>
<td>反拖延症闹钟</td>
<td><strong style="color: #e74c3c;">紧急</strong></td>
<td>闹钟响起后必须完成一道数学题才能关闭！<strong>产品经理说</strong>：“这能拯救996打工人。” <a>试用链接</a></td>
<td>王奋斗</td>
</tr>
<tr>
<td>4</td>
<td>会说话的盆栽</td>
<td>暂停</td>
<td>结合IoT与植物传感器，当缺水时会说：“<strong>我快干死了！</strong>” 原型视频已上传至<a>YouTube</a>。</td>
<td>陈绿叶</td>
</tr>
<tr>
<td>5</td>
<td>梦境记录仪</td>
<td>规划中</td>
<td>利用脑电波+AI生成梦境短视频。技术难点：如何区分<strong>真实记忆</strong>与<strong>深夜吃泡面后的幻觉</strong>？<a>联系研究团队</a></td>
<td>Dr. 周梦</td>
</tr>
</tbody>
<tfoot>
<tr>
<td colspan="4" style="text-align: right;">总计项目数：</td>
<td>5</td>
</tr>
</tfoot>
</table>

## 使用方法

```html
<table class="j-table">
    <thead>
        <tr>
            <th>编号</th>
            <th>项目名称</th>
            <th>状态</th>
            <th>描述</th>
            <th>负责人</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4" style="text-align: right;">总计项目数：</td>
            <td>5</td>
        </tr>
    </tfoot>
</table>
```

## 表格边框

添加类 `is-bordered` 可以为表格添加边框。

```html
<table class="j-table is-bordered">...</table>
```

<table class="j-table is-bordered">
    <thead>
        <tr>
            <th>编号</th>
            <th>项目名称</th>
            <th>状态</th>
            <th>描述</th>
            <th>负责人</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4" style="text-align: right;">总计项目数：</td>
            <td>5</td>
        </tr>
    </tfoot>
</table>

## 表格奇偶行

添加类 `is-striped` 可以为表格的奇偶行添加不同的背景颜色，提高可读性。

```html
<table class="j-table is-bordered is-striped">...</table>
```

<table class="j-table is-bordered is-striped">
    <thead>
        <tr>
            <th>编号</th>
            <th>项目名称</th>
            <th>状态</th>
            <th>描述</th>
            <th>负责人</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4" style="text-align: right;">总计项目数：</td>
            <td>5</td>
        </tr>
    </tfoot>
</table>

## 表格选中行

添加类 `is-selected` 可以为表格的选中行添加背景颜色，突出显示。

```html
<table class="j-table is-bordered">
    <thead>...</thead>
    <tbody>
        <tr>...</tr>
        <tr class="is-selected">...</tr>
        <tr>...</tr>
    </tbody>
    <tfoot>...</tfoot>
</table>
```

<table class="j-table is-bordered">
    <thead>
        <tr>
            <th>编号</th>
            <th>项目名称</th>
            <th>状态</th>
            <th>描述</th>
            <th>负责人</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr class="is-selected">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4" style="text-align: right;">总计项目数：</td>
            <td>5</td>
        </tr>
    </tfoot>
</table>

## 表格悬停行

添加类 `is-hoverable` 可以为表格的行添加悬停效果，当鼠标悬停在行上时，会改变行的背景颜色。

```html
<table class="j-table is-bordered is-hoverable">...</table>
```

<table class="j-table is-bordered is-hoverable">
    <thead>
        <tr>
            <th>编号</th>
            <th>项目名称</th>
            <th>状态</th>
            <th>描述</th>
            <th>负责人</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4" style="text-align: right;">总计项目数：</td>
            <td>5</td>
        </tr>
    </tfoot>
</table>

## 表格容器

设置类 `j-table-container` 可以为表格添加一个容器，用于控制表格的宽度和溢出滑动。

```html
<div class="j-table-container">
    <table class="j-table">
        ...
    </table>
</div>
```

<div class="j-table-container">
<table class="j-table is-bordered is-striped">
<tbody>

<tr>

<td>1</td>

<td>2</td>

<td>3</td>

<td>4</td>

<td>5</td>

<td>6</td>

<td>7</td>

<td>8</td>

<td>9</td>

<td>10</td>

<td>11</td>

<td>12</td>

<td>13</td>

<td>14</td>

<td>15</td>

<td>16</td>

<td>17</td>

<td>18</td>

<td>19</td>

<td>20</td>

<td>21</td>

<td>22</td>

<td>23</td>

<td>24</td>

<td>25</td>

<td>26</td>

<td>27</td>

<td>28</td>

<td>29</td>

<td>30</td>

<td>31</td>

<td>32</td>

<td>33</td>

<td>34</td>

<td>35</td>

<td>36</td>

<td>37</td>

<td>38</td>

<td>39</td>

<td>40</td>

<td>41</td>

<td>42</td>

<td>43</td>

<td>44</td>

<td>45</td>

<td>46</td>

<td>47</td>

<td>48</td>

<td>49</td>

<td>50</td>

<td>51</td>

<td>52</td>

<td>53</td>

<td>54</td>

<td>55</td>

<td>56</td>

<td>57</td>

<td>58</td>

<td>59</td>

<td>60</td>

<td>61</td>

<td>62</td>

<td>63</td>

<td>64</td>

<td>65</td>

<td>66</td>

<td>67</td>

<td>68</td>

<td>69</td>

<td>70</td>

<td>71</td>

<td>72</td>

<td>73</td>

<td>74</td>

<td>75</td>

<td>76</td>

<td>77</td>

<td>78</td>

<td>79</td>

<td>80</td>

<td>81</td>

<td>82</td>

<td>83</td>

<td>84</td>

<td>85</td>

<td>86</td>

<td>87</td>

<td>88</td>

<td>89</td>

<td>90</td>

<td>91</td>

<td>92</td>

<td>93</td>

<td>94</td>

<td>95</td>

<td>96</td>

<td>97</td>

<td>98</td>

<td>99</td>

<td>100</td>

</tr>

<tr>

<td>2</td>

<td>4</td>

<td>6</td>

<td>8</td>

<td>10</td>

<td>12</td>

<td>14</td>

<td>16</td>

<td>18</td>

<td>20</td>

<td>22</td>

<td>24</td>

<td>26</td>

<td>28</td>

<td>30</td>

<td>32</td>

<td>34</td>

<td>36</td>

<td>38</td>

<td>40</td>

<td>42</td>

<td>44</td>

<td>46</td>

<td>48</td>

<td>50</td>

<td>52</td>

<td>54</td>

<td>56</td>

<td>58</td>

<td>60</td>

<td>62</td>

<td>64</td>

<td>66</td>

<td>68</td>

<td>70</td>

<td>72</td>

<td>74</td>

<td>76</td>

<td>78</td>

<td>80</td>

<td>82</td>

<td>84</td>

<td>86</td>

<td>88</td>

<td>90</td>

<td>92</td>

<td>94</td>

<td>96</td>

<td>98</td>

<td>100</td>

<td>102</td>

<td>104</td>

<td>106</td>

<td>108</td>

<td>110</td>

<td>112</td>

<td>114</td>

<td>116</td>

<td>118</td>

<td>120</td>

<td>122</td>

<td>124</td>

<td>126</td>

<td>128</td>

<td>130</td>

<td>132</td>

<td>134</td>

<td>136</td>

<td>138</td>

<td>140</td>

<td>142</td>

<td>144</td>

<td>146</td>

<td>148</td>

<td>150</td>

<td>152</td>

<td>154</td>

<td>156</td>

<td>158</td>

<td>160</td>

<td>162</td>

<td>164</td>

<td>166</td>

<td>168</td>

<td>170</td>

<td>172</td>

<td>174</td>

<td>176</td>

<td>178</td>

<td>180</td>

<td>182</td>

<td>184</td>

<td>186</td>

<td>188</td>

<td>190</td>

<td>192</td>

<td>194</td>

<td>196</td>

<td>198</td>

<td>200</td>

</tr>

<tr>

<td>3</td>

<td>6</td>

<td>9</td>

<td>12</td>

<td>15</td>

<td>18</td>

<td>21</td>

<td>24</td>

<td>27</td>

<td>30</td>

<td>33</td>

<td>36</td>

<td>39</td>

<td>42</td>

<td>45</td>

<td>48</td>

<td>51</td>

<td>54</td>

<td>57</td>

<td>60</td>

<td>63</td>

<td>66</td>

<td>69</td>

<td>72</td>

<td>75</td>

<td>78</td>

<td>81</td>

<td>84</td>

<td>87</td>

<td>90</td>

<td>93</td>

<td>96</td>

<td>99</td>

<td>102</td>

<td>105</td>

<td>108</td>

<td>111</td>

<td>114</td>

<td>117</td>

<td>120</td>

<td>123</td>

<td>126</td>

<td>129</td>

<td>132</td>

<td>135</td>

<td>138</td>

<td>141</td>

<td>144</td>

<td>147</td>

<td>150</td>

<td>153</td>

<td>156</td>

<td>159</td>

<td>162</td>

<td>165</td>

<td>168</td>

<td>171</td>

<td>174</td>

<td>177</td>

<td>180</td>

<td>183</td>

<td>186</td>

<td>189</td>

<td>192</td>

<td>195</td>

<td>198</td>

<td>201</td>

<td>204</td>

<td>207</td>

<td>210</td>

<td>213</td>

<td>216</td>

<td>219</td>

<td>222</td>

<td>225</td>

<td>228</td>

<td>231</td>

<td>234</td>

<td>237</td>

<td>240</td>

<td>243</td>

<td>246</td>

<td>249</td>

<td>252</td>

<td>255</td>

<td>258</td>

<td>261</td>

<td>264</td>

<td>267</td>

<td>270</td>

<td>273</td>

<td>276</td>

<td>279</td>

<td>282</td>

<td>285</td>

<td>288</td>

<td>291</td>

<td>294</td>

<td>297</td>

<td>300</td>

</tr>

<tr>

<td>4</td>

<td>8</td>

<td>12</td>

<td>16</td>

<td>20</td>

<td>24</td>

<td>28</td>

<td>32</td>

<td>36</td>

<td>40</td>

<td>44</td>

<td>48</td>

<td>52</td>

<td>56</td>

<td>60</td>

<td>64</td>

<td>68</td>

<td>72</td>

<td>76</td>

<td>80</td>

<td>84</td>

<td>88</td>

<td>92</td>

<td>96</td>

<td>100</td>

<td>104</td>

<td>108</td>

<td>112</td>

<td>116</td>

<td>120</td>

<td>124</td>

<td>128</td>

<td>132</td>

<td>136</td>

<td>140</td>

<td>144</td>

<td>148</td>

<td>152</td>

<td>156</td>

<td>160</td>

<td>164</td>

<td>168</td>

<td>172</td>

<td>176</td>

<td>180</td>

<td>184</td>

<td>188</td>

<td>192</td>

<td>196</td>

<td>200</td>

<td>204</td>

<td>208</td>

<td>212</td>

<td>216</td>

<td>220</td>

<td>224</td>

<td>228</td>

<td>232</td>

<td>236</td>

<td>240</td>

<td>244</td>

<td>248</td>

<td>252</td>

<td>256</td>

<td>260</td>

<td>264</td>

<td>268</td>

<td>272</td>

<td>276</td>

<td>280</td>

<td>284</td>

<td>288</td>

<td>292</td>

<td>296</td>

<td>300</td>

<td>304</td>

<td>308</td>

<td>312</td>

<td>316</td>

<td>320</td>

<td>324</td>

<td>328</td>

<td>332</td>

<td>336</td>

<td>340</td>

<td>344</td>

<td>348</td>

<td>352</td>

<td>356</td>

<td>360</td>

<td>364</td>

<td>368</td>

<td>372</td>

<td>376</td>

<td>380</td>

<td>384</td>

<td>388</td>

<td>392</td>

<td>396</td>

<td>400</td>

</tr>

<tr>

<td>5</td>

<td>10</td>

<td>15</td>

<td>20</td>

<td>25</td>

<td>30</td>

<td>35</td>

<td>40</td>

<td>45</td>

<td>50</td>

<td>55</td>

<td>60</td>

<td>65</td>

<td>70</td>

<td>75</td>

<td>80</td>

<td>85</td>

<td>90</td>

<td>95</td>

<td>100</td>

<td>105</td>

<td>110</td>

<td>115</td>

<td>120</td>

<td>125</td>

<td>130</td>

<td>135</td>

<td>140</td>

<td>145</td>

<td>150</td>

<td>155</td>

<td>160</td>

<td>165</td>

<td>170</td>

<td>175</td>

<td>180</td>

<td>185</td>

<td>190</td>

<td>195</td>

<td>200</td>

<td>205</td>

<td>210</td>

<td>215</td>

<td>220</td>

<td>225</td>

<td>230</td>

<td>235</td>

<td>240</td>

<td>245</td>

<td>250</td>

<td>255</td>

<td>260</td>

<td>265</td>

<td>270</td>

<td>275</td>

<td>280</td>

<td>285</td>

<td>290</td>

<td>295</td>

<td>300</td>

<td>305</td>

<td>310</td>

<td>315</td>

<td>320</td>

<td>325</td>

<td>330</td>

<td>335</td>

<td>340</td>

<td>345</td>

<td>350</td>

<td>355</td>

<td>360</td>

<td>365</td>

<td>370</td>

<td>375</td>

<td>380</td>

<td>385</td>

<td>390</td>

<td>395</td>

<td>400</td>

<td>405</td>

<td>410</td>

<td>415</td>

<td>420</td>

<td>425</td>

<td>430</td>

<td>435</td>

<td>440</td>

<td>445</td>

<td>450</td>

<td>455</td>

<td>460</td>

<td>465</td>

<td>470</td>

<td>475</td>

<td>480</td>

<td>485</td>

<td>490</td>

<td>495</td>

<td>500</td>

</tr>

</tbody>

</table>
</div>
